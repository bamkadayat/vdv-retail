"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Home from "@/styles/home.module.scss";
import ImageSlider from "./imageSlider";
import Image from "next/image";
import { home } from "@/db/index";
import {
  homeTitleVariants,
  homeZoomInVariants,
  homeSlideInFromRightVariants,
} from "@/components/animation";
import Link from "next/link";

export default function HomePage() {
  const getTouchRef = useRef(null);
  
  const getTouchInView = useInView(getTouchRef, { once: true });

  // Refs for CountUp components
  const countriesRef = useRef(null);
  const storiesRef = useRef(null);
  const brandsRef = useRef(null);

  return (
    <div className={`${Home.homePage}`}>
      <div className={`${Home.topHeroVideo}`}>
        <video loop autoPlay muted playsInline className={Home.video}>
          <source
            src={
              home.topInfo.videoLink ? home.topInfo.videoLink : "Add video link"
            }
            type="video/mp4"
          ></source>
        </video>
        <section className={Home.topHeroContent}>
          <article className={Home.articleWrap}>
            <motion.h1 initial="hidden" animate="show" variants={homeTitleVariants}>
              {home.topInfo.title ? home.topInfo.title : "Add title"}
            </motion.h1>
            <motion.p initial="hidden" animate="show" variants={homeTitleVariants}>
              {home.topInfo.desc ? home.topInfo.desc : "Add desc"}
            </motion.p>
          </article>
        </section>
      </div>
      <section className={`${Home.sohoNumbers}`}>
        <h2>Vyver group is about...</h2>
        <div className={`${Home.sohoNumbersGrid}`}>
        {home.health.map((wellness, index) => (
          <>
           {index === 1 ? (
                <Link href={`${wellness.link}`}>
                  <div className={`${Home.item}`}>
                      <div className={`${Home.itemContentWrap}`}  ref={countriesRef} style={{ backgroundImage: `url(${wellness.imgLink})` }}>
                        <div className={`${Home.itemContent}`}>
                            <p>{wellness.id ? wellness.category : ""}</p>
                            <div className={`${Home.itemFootText}`}>
                              <p>{wellness.title ? wellness.title : ""}</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </Link>
            ) : (
          <div className={`${Home.item}`}>
            <div className={`${Home.itemContentWrap}`}  ref={countriesRef} style={{ backgroundImage: `url(${wellness.imgLink})` }}>
              <div className={`${Home.itemContent}`}>
                  <p>{wellness.id ? wellness.category : ""}</p>
                  <div className={`${Home.itemFootText}`}>
                    <p>{wellness.title ? wellness.title : ""}</p>
                  </div>
              </div>
            </div>
          </div>
            )}
            </>
          ))}

    {home.partners.map((story, index) => (
          <>
           {index === 1 ? (
                <Link href={`${story.link}`}>
                  <div className={`${Home.item}`}>
                      <div className={`${Home.itemContentWrap}`}  ref={countriesRef} style={{ backgroundImage: `url(${story.imgLink})` }}>
                        <div className={`${Home.itemContent}`}>
                            <p>{story.id ? story.category : ""}</p>
                            <div className={`${Home.itemFootText}`}>
                              <p>{story.title ? story.title : ""}</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </Link>
            ) : (
          <div className={`${Home.item}`}>
            <div className={`${Home.itemContentWrap}`}  ref={countriesRef} style={{ backgroundImage: `url(${story.imgLink})` }}>
              <div className={`${Home.itemContent}`}>
                  <p>{story.id ? story.category : ""}</p>
                  <div className={`${Home.itemFootText}`}>
                    <p>{story.title ? story.title : ""}</p>
                  </div>
              </div>
            </div>
          </div>
            )}
            </>
          ))}

      {home.investments.map((investment, index) => (
          <>
           {index === 1 ? (
                <Link href={`${investment.link}`}>
                  <div className={`${Home.item}`}>
                      <div className={`${Home.itemContentWrap}`}  ref={countriesRef} style={{ backgroundImage: `url(${investment.imgLink})` }}>
                        <div className={`${Home.itemContent}`}>
                            <p>{investment.id ? investment.category : ""}</p>
                            <div className={`${Home.itemFootText}`}>
                              <p>{investment.title ? investment.title : ""}</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </Link>
            ) : (
          <div className={`${Home.item}`}>
            <div className={`${Home.itemContentWrap}`}  ref={countriesRef} style={{ backgroundImage: `url(${investment.imgLink})` }}>
              <div className={`${Home.itemContent}`}>
                  <p>{investment.id ? investment.category : ""}</p>
                  <div className={`${Home.itemFootText}`}>
                    <p>{investment.title ? investment.title : ""}</p>
                  </div>
              </div>
            </div>
          </div>
            )}
            </>
          ))}
        </div>
      </section>
          <ImageSlider />
      <motion.section
        initial="hidden"
        animate="show"
        variants={homeSlideInFromRightVariants}
        className={`${Home.muchMore}`}
      >
      </motion.section>
      <section className={`${Home.getInTouch}`}>
        <motion.div
          ref={getTouchRef}
          initial="hidden"
          animate={getTouchInView ? "show" : "hidden"}
          variants={homeZoomInVariants}
          style={{ display: "inline-block" }}
        >
          <h2>{home.getTouch.title ? home.getTouch.title : "add title"}</h2>
        </motion.div>
        <div className={`${Home.getInTouchGrid}`}>
          <div className={`${Home.imgWrap}`}>
            <Image
              src={`${home.getTouch.imgLink}`}
              alt={`${home.getTouch.title}`}
              width={400}
              height={400}
            />
          </div>
          <div className={`${Home.addressInfo}`}>
            <p className={`${Home.address}`}>
              {home.getTouch.address ? home.getTouch.address : "add address"}
            </p>
            <p className={`${Home.email}`}>
              {home.getTouch.email ? (
                <a href={`mailto:${home.getTouch.email}`}>
                  {home.getTouch.email}
                </a>
              ) : (
                "add email"
              )}
            </p>
            <p className={`${Home.phone}`}>
              {home.getTouch.phone ? (
                <a href={`tel:${home.getTouch.phone}`}>{home.getTouch.phone}</a>
              ) : (
                "add phone"
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
