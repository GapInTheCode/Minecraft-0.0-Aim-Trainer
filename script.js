document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var yMovementElement = document.getElementById('yMovement');
    var tracker = document.getElementById('tracker');
    var outsideTracker = document.getElementById('outside-tracker');
    var startY = 0;
    var yMovement = 0;
    var lastMoveTime = Date.now();

    function updateYMovement(newY) {
        yMovement = newY - startY;
        yMovementElement.textContent = yMovement;
        lastMoveTime = Date.now();
    }

    document.addEventListener('mousemove', function (event) {
        var newY = event.clientY;
        var mouseX = event.clientX;
        var rect = tracker.getBoundingClientRect();

        if (mouseX < rect.left || mouseX > rect.right || newY < rect.top || newY > rect.bottom) {
            body.style.backgroundColor = '#ff6666';
        } else {
            body.style.backgroundColor = '#70e000';
        }
        if (Date.now() - lastMoveTime > 1000) {
            startY = newY;
            yMovement = 0;
        }

        updateYMovement(newY);
    });
});
