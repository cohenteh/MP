const strongSlice100 = 4645;
const splice100 = 4636;

const strongSlice50 = 4382;
const splice50 = 4400;


const strongSlice20 = 4570;
const splice20 = 4560;


const strongSlice10 = 4636;
const splice10 = 4452;






const borderWidth = 2;



const splice = splice10;


const size = 5000;
const baseLine = [];
for (let i = 0; i < size; i++) {
    baseLine.push(baseLineValue);
}




var ctx = document.getElementById('myChart').getContext('2d');

let labels = [];
for (let i = 0; i < size; i++) {
    labels.push(" ")
}

const data = {
    labels: labels.splice(splice),
    datasets: [{
            label: 'Baseline',
            backgroundColor: 'transparent',
            borderColor: 'rgb(255, 99, 132)',
            pointBorderColor: 'transparent',
            borderWidth: borderWidth,
            data: baseLine.splice(splice)
        },
        {
            label: 'LSTM',
            backgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            borderColor: 'green',
            borderWidth: borderWidth,
            data: LSTM.splice(splice)
        },
        {
            label: 'RNN-tanh',
            backgroundColor: 'transparent',
            borderColor: 'blue',
            pointBorderColor: 'transparent',
            borderWidth: borderWidth,
            data: RNN_TNT.splice(splice)
        },
        {
            label: 'RNN-RNN-reLU',
            backgroundColor: 'transparent',
            borderColor: 'orange',
            pointBorderColor: 'transparent',
            borderWidth: borderWidth,
            data: RNN_RL.splice(splice)
        },
        {
            label: 'MLP',
            backgroundColor: 'transparent',
            borderColor: 'black',
            data: MLP.splice(splice),
            borderWidth: borderWidth,
            pointBorderColor: 'transparent',
        }
    ]
};

const options = {}

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});