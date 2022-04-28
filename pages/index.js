import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Confirmation from "../components/stepper/confirmation.component";
import Step1 from "../components/stepper/step1.component";
import Step2 from "../components/stepper/step2.component";
import Step3 from "../components/stepper/step3.component";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    localStorage.getItem();
  });

  return <div></div>;
}
