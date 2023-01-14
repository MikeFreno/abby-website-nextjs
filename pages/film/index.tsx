import React from "react";
import Header from "../../components/Header";
import Head from "next/head";

function index() {
  return (
    <div>
      <Head>
        <title>Abigail Weinick | Film </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header color="black" />
    </div>
  );
}

export default index;
