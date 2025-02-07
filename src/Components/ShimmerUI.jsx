import React from "react";
import { ShimmerPostItem } from "react-shimmer-effects";

class Example extends React.Component {
  render() {
    return (
      <>
        <ShimmerPostItem card title text cta />
      </>
    );
  }
}


function ShimmerUI(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full h-full">
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
            <Example />
        </div>
    )
}

export default ShimmerUI