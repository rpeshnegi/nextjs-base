import React from "react";
import styles from "./styles"

function Pageloader() {
	return (
		<>
			<div className="PageloaderStyles">
				<div className="loader">
					<img src="/images/loader.png" alt="" />
				</div>
			</div>
			<style jsx>{styles}</style>
		</>
	);
}

export default Pageloader;
