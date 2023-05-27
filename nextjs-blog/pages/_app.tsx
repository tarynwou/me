import "../styles/globals.css";
import "../styles/Home.module.css";
import React from "react";
import PropTypes from "prop-types";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};

export default MyApp;
