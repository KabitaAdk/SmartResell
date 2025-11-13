<?php
session_start();
include('includes/db_connect.php');

// Block access if not logged in as user
if(!isset($_SESSION['role']) || $_SESSION['role'] !== 'user'){
    header("Location: register.php?message=" . urlencode("Please register first to list your iPhone"));
    exit();
}

// Fetch iPhone models and specs
$iphone_specs = $conn->query("SELECT * FROM iphone_specs ORDER BY model, ram, storage");

$error = $success = '';
$predicted_price = 0;

// Predict price helper
function predictPrice($battery_mah, $ram, $storage, $launch_year, $used_month, $battery_health, $model) {
    $coefficients = [
        "iPhone 11 Pro" => 9812.49, "iPhone 11 Pro Max" => 9637.35, "iPhone 12" => 13057.7,
        "iPhone 12 Pro" => 3300.97, "iPhone 12 Pro Max" => 5620.58, "iPhone 12 mini" => 9167.62,
        "iPhone 13" => 8069.9, "iPhone 13 Pro" => 12617.1, "iPhone 13 Pro Max" => 13175.8,
        "iPhone 13 mini" => 3818.29, "iPhone 14" => 8483.92, "iPhone 14 Plus" => 13845.5,
        "iPhone 14 Pro" => 21144.5, "iPhone 14 Pro Max" => 26432, "iPhone 15" => 13888.7,
        "iPhone 15 Plus" => 18585.8, "iPhone 15 Pro" => 26191.2, "iPhone 15 Pro Max" => 18525.8,
        "iPhone 16" => 15935.5, "iPhone 16 Plus" => 22395.8, "iPhone 16 Pro" => 33441.9,
        "iPhone 16 Pro Max" => 27344.6, "iPhone 5" => 22018.7, "iPhone 5c" => 21366.7,
        "iPhone 5s" => 21503.7, "iPhone 6" => 16557.1, "iPhone 6 Plus" => 16671.1,
        "iPhone 6s" => 12027.2, "iPhone 6s Plus" => 8952.08, "iPhone 7" => 5841.55,
        "iPhone 7 Plus" => 2607.54, "iPhone 8" => 1661.13, "iPhone 8 Plus" => -3544.35,
        "iPhone SE (1st gen)" => 12152.4, "iPhone X" => 1078.68, "iPhone XR" => -2658.71,
        "iPhone XS" => 663.349, "iPhone XS Max" => -276.902
    ];

    $model_coeff = $coefficients[$model] ?? 0;

    $price = -2732080 
        + 2.69223 * $battery_mah
        + 3037.03 * $ram
        + 147.001 * $storage
        + 1332.36 * $launch_year
        - 110.408 * $used_month
        + 513.238 * $battery_health
        + $model_coeff;

    return round($price);
}

if(isset($_POST['submit'])){
    $user_id = $_SESSION['user_id'];
    $model = $_POST['model'];
    $launch_year = intval($_POST['launch_year']);
    $ram = intval($_POST['ram']);
    $storage = intval($_POST['storage']);
    $battery_capacity = intval($_POST['battery_capacity']);
    $used_months = intval($_POST['used_months']);
    $battery_health = intval($_POST['battery_health']);
    $description = trim($_POST['description'] ?? '');
    $description = $conn->real_escape_string($description);

    $current_year = date("Y");
    $current_month = date("n");
    $max_months = (($current_year - $launch_year) * 12) + $current_month;

    if($battery_health < 30 || $battery_health > 100){
        $error = "Battery health must be between 30% and 100%.";
    } elseif($used_months > $max_months){
        $error = "Used months cannot exceed the phone’s age since its launch year ($launch_year).";
    } else {
        $predicted_price = predictPrice($battery_capacity, $ram, $storage, $launch_year, $used_months, $battery_health, $model);

        $price_option = $_POST['price_option'] ?? 'predicted';
        $price = ($price_option === 'predicted') 
            ? $predicted_price 
            : intval($_POST['price'] ?? 0);

        // Handle image upload
        $image_name = '';
        if(isset($_FILES['image']) && $_FILES['image']['error'] == 0){
            $ext = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
            $allowed_ext = ['jpg','jpeg','png','webp'];
            if(in_array(strtolower($ext), $allowed_ext)){
                $image_name = 'iphone_'.uniqid().'.'.$ext;
                move_uploaded_file($_FILES['image']['tmp_name'], 'uploads/'.$image_name);
            } else {
                $error = "Invalid file type. Only JPG, PNG, or WEBP allowed.";
            }
        }

        if(!$error){
            $stmt = $conn->prepare("INSERT INTO listings 
                (user_id, model, launch_year, ram, storage, battery_capacity, used_months, battery_health, price, description, image, status, created_at) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Available', NOW())");

            $stmt->bind_param("isiiiiiiiss", 
                $user_id, $model, $launch_year, $ram, $storage, $battery_capacity, 
                $used_months, $battery_health, $price, $description, $image_name
            );

            if($stmt->execute()){
                $success = "✅ iPhone listed successfully!";
            } else {
                $error = "⚠️ Error listing iPhone: " . $stmt->error;
            }
        }
    }
}
?>

<?php include('includes/header.php'); ?>

<div class="container mt-5">
    <h2 class="text-center mb-4">List Your iPhone</h2>

    <?php if($error): ?>
        <div class="alert alert-danger text-center"><?php echo $error; ?></div>
    <?php endif; ?>
    <?php if($success): ?>
        <div class="alert alert-success text-center"><?php echo $success; ?></div>
    <?php endif; ?>

    <form method="POST" enctype="multipart/form-data" id="sellForm">

        <!-- Model -->
        <div class="mb-3">
            <label>iPhone Model</label>
            <select name="model" id="model" class="form-select" required onchange="updateSpecs()">
                <option value="">Select Model</option>
                <?php while($row = $iphone_specs->fetch_assoc()): ?>
                    <option value="<?php echo $row['model']; ?>" 
                        data-launch_year="<?php echo $row['launch_year']; ?>" 
                        data-ram="<?php echo $row['ram']; ?>" 
                        data-storage="<?php echo $row['storage']; ?>" 
                        data-battery_capacity="<?php echo $row['battery_capacity']; ?>">
                        <?php echo $row['model']." (".$row['ram']."GB/".$row['storage']."GB)"; ?>
                    </option>
                <?php endwhile; ?>
            </select>
        </div>

        <div id="specs_section" style="display:none;">
            <div class="mb-3"><label>Launch Year</label>
                <input type="text" id="launch_year" name="launch_year" class="form-control" readonly></div>
            <div class="mb-3"><label>RAM (GB)</label>
                <input type="text" id="ram" name="ram" class="form-control" readonly></div>
            <div class="mb-3"><label>Storage (GB)</label>
                <input type="text" id="storage" name="storage" class="form-control" readonly></div>
            <div class="mb-3"><label>Battery Capacity (mAh)</label>
                <input type="text" id="battery_capacity" name="battery_capacity" class="form-control" readonly></div>
        </div>

        <div class="mb-3">
            <label>Used Months</label>
            <input type="number" name="used_months" id="used_months" class="form-control" required>
        </div>

        <div class="mb-3">
            <label>Battery Health (%)</label>
            <input type="number" name="battery_health" id="battery_health" class="form-control" min="30" max="100" required>
        </div>

        <div class="mb-3">
            <button type="button" id="btnPredictPrice" class="btn btn-primary w-100">Predict Price</button>
        </div>

        <div class="mb-3" id="predictedPriceSection" style="display:none;">
            <p>Predicted Price: NPR <span id="predPriceDisplay">0</span></p>
            <input type="hidden" name="predicted_price" id="predicted_price" value="0">
            <div class="d-flex gap-2">
                <button type="button" id="usePredictedBtn" class="btn btn-success flex-fill">Use Predicted Price</button>
                <button type="button" id="useOwnBtn" class="btn btn-warning flex-fill">Use Own Price</button>
            </div>
        </div>

        <input type="hidden" name="price_option" id="price_option" value="predicted">

        <div class="mb-3" id="ownPriceSection" style="display:none;">
            <label>Price (NPR)</label>
            <input type="number" name="price" id="price" class="form-control" placeholder="Enter your price manually">
        </div>

        <div id="finalSection" style="display:none;">
            <div class="mb-3">
                <label>Description</label>
                <textarea name="description" class="form-control" rows="3" required></textarea>
            </div>
            <div class="mb-3">
                <label>Upload Image</label>
                <input type="file" name="image" class="form-control">
            </div>
        </div>

        <button type="submit" name="submit" id="listIphoneBtn" class="btn btn-success w-100 mt-3" style="display:none;">List iPhone</button>
    </form>
</div>

<script>
function updateSpecs() {
    const select = document.getElementById('model');
    const option = select.options[select.selectedIndex];
    if (select.value !== "") {
        document.getElementById('specs_section').style.display = 'block';
        document.getElementById('launch_year').value = option.getAttribute('data-launch_year');
        document.getElementById('ram').value = option.getAttribute('data-ram');
        document.getElementById('storage').value = option.getAttribute('data-storage');
        document.getElementById('battery_capacity').value = option.getAttribute('data-battery_capacity');
    } else {
        document.getElementById('specs_section').style.display = 'none';
    }
}

function calculatePredictedPrice() {
    const modelSelect = document.getElementById('model');
    const option = modelSelect.options[modelSelect.selectedIndex];
    const battery = parseInt(option.getAttribute('data-battery_capacity')) || 0;
    const ram = parseInt(option.getAttribute('data-ram')) || 0;
    const storage = parseInt(option.getAttribute('data-storage')) || 0;
    const launch_year = parseInt(option.getAttribute('data-launch_year')) || 0;
    const used_months = parseInt(document.getElementById('used_months').value) || 0;
    const battery_health = parseInt(document.getElementById('battery_health').value) || 100;
    const model = modelSelect.value;

    const coeffs = {
        "iPhone 11 Pro": 9812.49,"iPhone 11 Pro Max": 9637.35,"iPhone 12": 13057.7,
        "iPhone 12 Pro": 3300.97,"iPhone 12 Pro Max": 5620.58,"iPhone 12 mini": 9167.62,
        "iPhone 13": 8069.9,"iPhone 13 Pro": 12617.1,"iPhone 13 Pro Max": 13175.8,
        "iPhone 13 mini": 3818.29,"iPhone 14": 8483.92,"iPhone 14 Plus": 13845.5,
        "iPhone 14 Pro": 21144.5,"iPhone 14 Pro Max": 26432,"iPhone 15": 13888.7,
        "iPhone 15 Plus": 18585.8,"iPhone 15 Pro": 26191.2,"iPhone 15 Pro Max": 18525.8,
        "iPhone 16": 15935.5,"iPhone 16 Plus": 22395.8,"iPhone 16 Pro": 33441.9,
        "iPhone 16 Pro Max": 27344.6
    };
    const coeff = coeffs[model] || 0;
    let price = -2732080 + 2.69223*battery + 3037.03*ram + 147.001*storage + 1332.36*launch_year - 110.408*used_months + 513.238*battery_health + coeff;
    price = Math.round(price);
    document.getElementById('predPriceDisplay').textContent = price.toLocaleString();
    document.getElementById('predicted_price').value = price;
}

document.getElementById('btnPredictPrice').addEventListener('click', function(){
    calculatePredictedPrice();
    document.getElementById('predictedPriceSection').style.display = 'block';
    this.style.display = 'none';
});

// ✅ Fixed button hide behavior here
document.getElementById('usePredictedBtn').addEventListener('click', function(){
    document.getElementById('price_option').value = 'predicted';
    document.getElementById('finalSection').style.display = 'block';
    document.getElementById('listIphoneBtn').style.display = 'block';
    document.getElementById('useOwnBtn').style.display = 'none'; // hide the other button
    this.style.display = 'none'; // hide itself
});

document.getElementById('useOwnBtn').addEventListener('click', function(){
    document.getElementById('price_option').value = 'own';
    document.getElementById('ownPriceSection').style.display = 'block';
    document.getElementById('finalSection').style.display = 'block';
    document.getElementById('listIphoneBtn').style.display = 'block';
    document.getElementById('usePredictedBtn').style.display = 'none'; // hide the other button
    this.style.display = 'none'; // hide itself
});
</script>

<?php include('includes/footer.php'); ?>
