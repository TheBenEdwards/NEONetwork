import React, { useEffect, useState } from 'react'
import { ThemeProvider } from "styled-components";
import theme from '../styles/theme'

const Theme: React.FC<any> = ({ children }) => {

    return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
    )
}

export default Theme;