// Inisialisasi bobot dan bias
let weights = [Math.random(), Math.random()];
let bias = Math.random();

// Fungsi aktivasi (sigmoid)
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

// Forward pass
function forwardPass(input1, input2) {
    let weightedSum = input1 * weights[0] + input2 * weights[1] + bias;
    return sigmoid(weightedSum);
}

// Loss function (MSE)
function calculateError(output, target) {
    return (output - target) ** 2;
}

// Backpropagation
function backpropagation(input1, input2, target, learningRate) {
    let output = forwardPass(input1, input2);
    let error = calculateError(output, target);
    
    // Update weights and bias
    let dError = 2 * (output - target);
    let dOutput = output * (1 - output);
    let dWeight1 = dError * dOutput * input1;
    let dWeight2 = dError * dOutput * input2;
    let dBias = dError * dOutput;

    weights[0] -= learningRate * dWeight1;
    weights[1] -= learningRate * dWeight2;
    bias -= learningRate * dBias;
}

// Interaksi dengan Antarmuka Pengguna
document.getElementById('trainButton').addEventListener('click', function() {
    // Mendapatkan nilai input dari UI
    let input1 = parseFloat(document.getElementById('input1').value);
    let input2 = parseFloat(document.getElementById('input2').value);

    // Melakukan pelatihan
    for (let i = 0; i < 1000; i++) {
        backpropagation(0, 0, 0, 0.1); // Training data: 0 OR 0 = 0
        backpropagation(0, 1, 1, 0.1); // Training data: 0 OR 1 = 1
        backpropagation(1, 0, 1, 0.1); // Training data: 1 OR 0 = 1
        backpropagation(1, 1, 1, 0.1); // Training data: 1 OR 1 = 1
    }

    // Melakukan prediksi
    let predictedOutput = forwardPass(input1, input2);
    document.getElementById('output').value = predictedOutput.toFixed(4);
});
