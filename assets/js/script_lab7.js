 // Thêm JavaScript để xử lý việc click vào card
 document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Xóa class active từ tất cả các card
        document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
        // Thêm class active vào card được click
        card.classList.add('active');
    });
});

const ctx = document.getElementById('percentileChart').getContext('2d');

new Chart(ctx, {
type: 'line',
data: {
labels: ['Limited', 'Developing', 'Established', 'Superior'],
datasets: [{
    label: 'Percentile',
    data: [20, 50, 100, 150, 180],
    borderColor: '#4B0082',
    backgroundColor: 'rgba(75, 0, 130, 0.1)',
    pointBackgroundColor: '#4B0082',
    pointRadius: 5,
    fill: true,
    tension: 0.4 // smooth curve
}]
},
options: {
scales: {
    x: {
        display: true,
        title: {
            display: true,
            
            color: '#4B0082'
        }
    },
    y: {
        beginAtZero: true,
        max: 200,
        ticks: {
            stepSize: 50
        }
    }
},
plugins: {
    legend: {
        display: false
    },
    annotation: {
        annotations: {
            percentile: {
                type: 'line',
                xMin: 88,
                xMax: 88,
                borderColor: 'rgba(75, 0, 130, 0.5)',
                borderWidth: 2,
                label: {
                    enabled: true,
                    content: '88th Percentile',
                    position: 'end'
                }
            }
        }
    }
}
}
});