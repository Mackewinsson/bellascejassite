/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import "./src/globalStyles/bootstrap.min.css"
import "./src/globalStyles/global.css"
// You can delete this file if you're not using it

import React from "react"
import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => <Layout>{element}</Layout>
