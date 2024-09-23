"use client";
import React from "react";
import Image from "next/image";
export default function NewsLetter() {
  return (
    <div className="main-sec-padding pt-0">
      <div className="container">
        <div className="home-contact-sec">
          <div className="d-flex flex-column flex-lg-row gap-3 align-items-lg-center justify-content-between flex-wrap wow fadeInUp">
            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 gap-lg-5">
              <div>
                <Image
                  src="/assets/images/logo/white-logo.png"
                  width={100}
                  height={100}
                  alt="Image Description"
                />
              </div>
              <h2 className="section-title-small mb-0">
                إذا كانت لديكم أية أسئلة أو استفسارات <br />
                <span>لا تترددوا في الاتصال بنا.</span>
              </h2>
            </div>
            <a className="btn btn-mod btn-color btn-large wow fadeInDownShort btn-round btn-hover-anim">
              <span>اطلب خدمة</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
