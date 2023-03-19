<script>
		function calculateGrade() {
			const marksInput = document.getElementById("marks");
			const marks = marksInput.value;
			let grade;

			if (marks >= 80) {
				grade = "A";
			} else if (marks >= 70) {
				grade = "B";
			} else if (marks >= 60) {
				grade = "C";
			} else if (marks >= 50) {
				grade = "D";
			} else if (marks >= 40) {
				grade = "E";
			} else {
				grade = "F";
			}

			document.getElementById("grade").innerHTML = `Grade: ${grade}`;
		}
	</script>