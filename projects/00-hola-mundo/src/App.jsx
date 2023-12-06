import React from "react";
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App () {
    return(
           <>
           <TwitterFollowCard userName="midudev" name="Miguel Angel Duran"/>
           <TwitterFollowCard userName="pheralb" name="Pablo Hernandez"/>
           <TwitterFollowCard userName="elonmusk" name="Elon Musk"/>
           </>
    )
}