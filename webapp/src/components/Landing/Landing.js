import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"

function Landing() {
  return (
    <section class="home" id="home">
      <div class="swiper home-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="box slide-1">
              <div class="content">
                <span>never stop</span>
                <h3>exploring</h3>
                <p>
                𝐀 𝐝𝐞𝐬𝐢𝐫𝐞 𝐭𝐨 𝐚𝐥𝐭𝐞𝐫 𝐲𝐨𝐮𝐫 𝐥𝐢𝐟𝐞, 𝐓𝐡𝐞 𝐟𝐞𝐞𝐥𝐢𝐧𝐠❤️ 𝐭𝐡𝐚𝐭 𝐩𝐮𝐬𝐡𝐞𝐬 𝐲𝐨𝐮 𝐭𝐨 𝐭𝐫𝐚𝐯𝐞𝐥 ✈
                𝐥𝐞𝐭 𝐮𝐬 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮 𝐭𝐨 𝐝𝐞𝐜𝐢𝐝𝐞🤔
                🏂𝐓𝐫𝐚𝐯𝐞𝐥🌍𝐰𝐢𝐭𝐡 𝐮𝐬 𝐬𝐡𝐚𝐫𝐞 𝐲𝐨𝐮𝐫 𝐒𝐭𝐨𝐫𝐢𝐞𝐬🏄 &𝐦𝐚𝐤𝐞 𝐌𝐞𝐦𝐨𝐫𝐢𝐞𝐬
                </p>
                <Link class="action-btn">
                  get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
