"use client";

import React, { useEffect, useState } from "react";
import logo from "@/../public/images/web/logopng.png";
import Image from "next/image";

export default function PageLoading() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2200);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="laptop WebStartLoader" id="WebStartLoader">
      <svg
        className="laptop__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 79.375 79.375"
        height="300"
        width="300"
      >
        <g transform="translate(-2.22 3.222)">
          <g transform="translate(-335.788 -22.347) scale(.39771)">
            <rect
              fill="#b3b3b3"
              width="137.583"
              height="89.958"
              x="880.884"
              y="99.204"
              ry="2.022"
            ></rect>
            <rect
              y="100.527"
              x="882.207"
              height="87.313"
              width="134.938"
              ry="2.134"
              rx="0"
            ></rect>
            <path d="M886.175 104.496h127v79.375h-127z" fill="#4d4d4d"></path>
            <rect
              fill="#333"
              width="29.788"
              height="70.68"
              x="891.36"
              y="113.22"
              ry="0"
              rx="0"
            ></rect>
          </g>
          <path
            d="M16.674 20.813h50.597v.317H16.674zM30.53 24.5h36.617v15.488H30.529zm0-1.555h9.184V24.5H30.53z"
            fill="#1a1a1a"
          ></path>
          <path d="M30.53 22.69h9.183v.255H30.53z" fill="#003380"></path>
          <rect
            fill="#2c5aa0"
            width="6.399"
            height=".455"
            x="32.113"
            y="23.546"
            ry=".227"
          ></rect>
          <path
            d="M30.534 41.82h36.645v8.972H30.534zm-.005-1.557h9.184v1.555H30.53z"
            fill="#1a1a1a"
          ></path>
          <path d="M30.53 40.007h9.183v.256H30.53z" fill="#003380"></path>
          <rect
            fill="#2c5aa0"
            ry=".227"
            y="40.793"
            x="32.089"
            height=".455"
            width="6.399"
          ></rect>
          <g transform="translate(-19.725 -1.116) scale(.39771)" fill="#ccc">
            <rect
              ry=".767"
              y="62.346"
              x="99.493"
              height="1.535"
              width="14.902"
            ></rect>
            <rect
              width="14.902"
              height="1.535"
              x="103.298"
              y="65.818"
              ry=".767"
            ></rect>
            <rect
              width="16.379"
              height="1.535"
              x="106.895"
              y="69.291"
              ry=".767"
            ></rect>
            <rect
              width="11.497"
              height="1.535"
              x="106.959"
              y="72.763"
              ry=".767"
            ></rect>
            <rect
              ry=".767"
              y="76.235"
              x="107.055"
              height="1.535"
              width="11.497"
            ></rect>
            <rect
              ry=".767"
              y="79.707"
              x="106.927"
              height="1.535"
              width="11.497"
            ></rect>
            <rect
              ry=".767"
              y="83.179"
              x="102.833"
              height="1.535"
              width="16.379"
            ></rect>
            <rect
              ry=".767"
              y="86.651"
              x="102.746"
              height="1.535"
              width="13.001"
            ></rect>
            <rect
              ry=".767"
              y="90.123"
              x="106.991"
              height="1.535"
              width="16.379"
            ></rect>
            <rect
              ry=".767"
              y="93.595"
              x="107.338"
              height="1.535"
              width="9.882"
            ></rect>
            <rect
              ry=".767"
              y="97.067"
              x="100.024"
              height="1.535"
              width="16.379"
            ></rect>
            <rect
              ry=".767"
              y="100.539"
              x="100.196"
              height="1.535"
              width="12.74"
            ></rect>
            <rect
              ry=".767"
              y="104.011"
              x="100.379"
              height="1.535"
              width="12.44"
            ></rect>
          </g>
          <g transform="translate(-411.355 -23.965) scale(.39771)">
            <rect
              fill="#ccc"
              ry=".887"
              y="193.745"
              x="1056.522"
              height="4.151"
              width="166.317"
            ></rect>
            <path
              fill="#999"
              d="M1222.19 197.896h-165.048l4.029 2.723h156.468z"
            ></path>
          </g>
          <rect
            fill="#b3b3b3"
            ry=".4"
            y="53.067"
            x="38.233"
            height=".801"
            width="7.35"
          ></rect>
          <rect
            fill="#999"
            ry=".4"
            y="43.091"
            x="31.651"
            height=".801"
            width="10.779"
          ></rect>
          <rect
            fill="#999"
            width="10.779"
            height=".801"
            x="31.651"
            y="45.052"
            ry=".4"
          ></rect>
          <rect
            fill="#999"
            width="10.779"
            height=".801"
            x="31.651"
            y="47.013"
            ry=".4"
          ></rect>
          <rect
            fill="#999"
            width="10.779"
            height=".801"
            x="31.651"
            y="48.975"
            ry=".4"
          ></rect>
          <rect
            fill="#999"
            ry=".051"
            y="49.718"
            x="43.875"
            height=".103"
            width="1.511"
          ></rect>
          <rect
            fill="#999"
            width="5.07"
            height=".801"
            x="43.661"
            y="43.181"
            ry=".4"
          ></rect>
          <rect
            fill="#999"
            width="13.784"
            height=".801"
            x="43.683"
            y="45.152"
            ry=".4"
          ></rect>
          <rect
            fill="#999"
            width="10.779"
            height=".801"
            x="43.703"
            y="46.958"
            ry=".4"
          ></rect>
          <rect
            fill="#c83737"
            width="4.572"
            height=".61"
            x="31.725"
            y="25.832"
            ry=".305"
          ></rect>
          <rect
            fill="#fd5"
            width="8.157"
            height=".61"
            x="37.883"
            y="25.823"
            ry=".305"
          ></rect>
          <rect
            fill="#fd5"
            ry=".305"
            y="27.46"
            x="37.922"
            height=".61"
            width="10.535"
          ></rect>
          <rect
            fill="#fd5"
            ry=".305"
            y="29.214"
            x="37.922"
            height=".61"
            width="6.053"
          ></rect>
          <rect
            fill="#999"
            width="10.779"
            height=".801"
            x="31.751"
            y="30.95"
            ry=".4"
          ></rect>
          <rect
            fill="#ccc"
            ry=".325"
            y="32.771"
            x="31.771"
            height=".649"
            width="3.93"
          ></rect>
          <rect
            fill="#c83737"
            ry=".305"
            y="32.771"
            x="36.627"
            height=".61"
            width="4.572"
          ></rect>
          <rect
            fill="#5fbcd3"
            width="6.053"
            height=".61"
            x="42.045"
            y="32.731"
            ry=".305"
          ></rect>
          <rect
            fill="#ccc"
            width="3.93"
            height=".649"
            x="48.951"
            y="32.672"
            ry=".325"
          ></rect>
          <rect
            className="code"
            id="code-8"
            fill="#fd5"
            width="6.053"
            height=".61"
            x="35.771"
            y="34.449"
            ry=".305"
            style={{ visibility: "visible" }}
          ></rect>
          <rect
            className="code"
            id="code-7"
            fill="#5fbcd3"
            ry=".305"
            y="34.5"
            x="42.27"
            height=".61"
            width="9.509"
            style={{ visibility: "visible" }}
          ></rect>
          <rect
            className="code"
            id="code-6"
            fill="#ccc"
            ry=".325"
            y="36.08"
            x="38.948"
            height=".649"
            width="3.93"
            style={{ visibility: "visible" }}
          ></rect>
          <rect
            className="code"
            id="code-5"
            fill="#37c871"
            ry=".325"
            y="36.08"
            x="44.106"
            height=".649"
            width="2.847"
            style={{ visibility: "visible" }}
          ></rect>
          <rect
            className="code"
            id="code-4"
            fill="#37c871"
            ry=".325"
            y="36.131"
            x="47.923"
            height=".649"
            width="2.692"
            style={{ visibility: "visible" }}
          ></rect>
          <rect
            className="code"
            id="code-3"
            fill="#5fbcd3"
            ry=".325"
            y="36.131"
            x="51.585"
            height=".649"
            width="6.097"
            style={{ visibility: "visible" }}
          ></rect>
          <rect
            className="code"
            id="code-2"
            fill="#ccc"
            width="3.93"
            height=".649"
            x="35.904"
            y="37.834"
            ry=".325"
            style={{ visibility: "visible" }}
          ></rect>
          <rect
            className="code"
            id="code-1"
            fill="#c83737"
            width="7.203"
            height=".61"
            x="41.102"
            y="37.905"
            ry=".305"
            style={{ visibility: "visible" }}
          ></rect>
        </g>
      </svg>
      <div className="loading-logo flex items-center justify-center">
        <Image src={logo} alt="SmashCode" />
      </div>
      <div className="web-loader-prgress-wrapper flex items-center justify-center">
        <div className="web-loader-prgress"></div>
      </div>
    </div>
  );
}
