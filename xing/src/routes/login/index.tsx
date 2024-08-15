import { Button } from "antd";
import { useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";

export default function Login() {

    return <div>
        <Button onClick={()=>{redirect('/manuscripts')}}>跳转</Button>

    </div>;
  }
  