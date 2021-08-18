function progressBar() {
	return `<div class="progress-container progress-primary">
			<span class="progress-badge">PHP</span>
			<div class="progress">
				<div
					class="progress-bar progress-bar-primary"
					data-aos="progress-full"
					data-aos-offset="10"
					data-aos-duration="2000"
					role="progressbar"
					aria-valuenow="60"
					aria-valuemin="0"
					aria-valuemax="100"
					style="width: 90%"
				></div>
				<span class="progress-value">90%</span>
			</div>
		</div>`;
}