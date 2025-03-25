const ctx = document.getElementById('travelChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Paris', 'Tokyo', 'New York', 'Rome', 'Sydney'],
        datasets: [{
            label: 'Popularity',
            data: [90, 85, 80, 75, 70],
            backgroundColor: 'rgba(54, 162, 235, 0.5)'
        }]
    }
});
