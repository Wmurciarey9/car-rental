import React from "react";
import "./download.scss";

export const Download = () => {
  return (
    <div className="download">
      <div className="left">
        <h1>
          Download the app for faster reservations and better deals
          <i class="fa-solid fa-car"></i>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="dw-icons">
          <img
            src="https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=2048"
            alt=""
          />
          <img
            src="https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=2048"
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <img
          src="https://cdn.dribbble.com/userupload/2671855/file/original-7732034af6d3a39de4900bc150b231de.png?compress=1&resize=1905x1428"
          alt=""
        />
      </div>
    </div>
  );
};
