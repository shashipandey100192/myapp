export const Mysetting = {
	general: {
		primaryColor: "#ff1100",
		secondaryColor: "#31aa02",
		fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', " +
			"'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', " +
			"sans-serif",
		showHeader: true,
		showFooter: false,
		showInputRow: true,
		embedded: false,
		flowStartTrigger: "ON_LOAD",
	},

	header: {
		title: (
			<div style={{cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold"}} onClick={
				() => window.open("http://yarpadlo.in")
			}>
				search window
			</div>
		)
		
	},
    audio: {
		disabled: false,
	},




	
	device: {
		desktopEnabled: true,
		mobileEnabled: true,
		applyMobileOptimizations: true,
	}
}