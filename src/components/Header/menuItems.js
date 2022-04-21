import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import logoW from "../../assets/image/logo-main-white.png";

export const menuItems = [
  {
    name: "about",
    label: "About Us",
    isExternal: false,
    items: [
      {
        name: "neplanding",
        label: "NEP",
        isExternal: false,
      },
      {
        name: "contact",
        label: "Contact Us",
        isExternal: false,
      },
    ],
  },
  {
    name: "e-learning",
    label: "E Learning",
    isExternal: false,
    items: [
      {
        name: "for-schools",
        label: "For Schools",
        isExternal: false,
      },
    ],
  },
  {
    name: "e-school",
    label: "E School",
    isExternal: false,
  },
  {
    name: "continuing-education",
    label: "Continuing Education",
    isExternal: false,
  },
  {
    name: "blogsPage/12",
    label: "Blogs Section",
    isExternal: false,
  },

  // {
  //   name: "#",
  //   label: "For Students",
  //   items: [
  //     { name: "grade-landing-8", label: "Class 8",  isExternal: false },
  //     { name: "grade-landing-9", label: "Class 9",  isExternal: false, },
  //     { name: "grade-landing-10", label: "Class 10",  isExternal: false, },
  //   ],
  // },
  {
    name: "#",
    label: "Study materials",
    items: [
      { name: "grade8", label: "Class 8", isExternal: false },
      { name: "grade9", label: "Class 9", isExternal: false },
      { name: "grade10", label: "Class 10", isExternal: false },
    ],
  },
  // {
  //   name: "for-schools",
  //   label: "For Schools",
  //   isExternal: false,
  // },

  // {
  //   name: "why-rankpedia",
  //   label: "Why Rankpedia?",
  //   isExternal: false,
  // },
  // {
  //   name: "#",
  //   label: "Subscription",
  //   isExternal: false,
  //  },
  {
    name: "#quizwizz",
    label: "Quizwizz",
    items: [
      { name: "quizlisting8", label: "Class 8", isExternal: false },
      { name: "quizlisting9", label: "Class 9", isExternal: false },
      { name: "quizlisting10", label: "Class 10", isExternal: false },
    ],
  },
  //  {
  //   name: "contact",
  //   label: "Contact Us",
  //   isExternal: false,
  //  },

  // {
  //          name: "demos",
  //          label: "Demos",
  //          items: [
  //            { name: "", label: "Home 01" },
  //            { name: "home-2", label: "Home 02" },
  //            { name: "home-3", label: "Home 03" },
  //            { name: "home-4", label: "Home 04" },
  //            { name: "home-5", label: "Home 05" },
  //            { name: "home-6", label: "Home 06" },
  //          ],
  //        },
  //        {
  //          name: "pages",
  //          label: "pages",
  //          items: [
  //            { name: "about", label: "About Us" },
  //            {
  //              name: "careers",
  //              label: "Careers",
  //              items: [
  //                { name: "career", label: "Career" },
  //                { name: "career-details", label: "Career Details" },
  //              ],
  //            },
  //            {
  //              name: "utility",
  //              label: "Utility",
  //              items: [
  //                { name: "pricing", label: "Pricing & Plan" },
  //                { name: "contact", label: "Contact" },
  //                { name: "faq", label: "FAQ" },
  //                { name: "comingsoon", label: "Coming soon" },
  //                { name: "terms", label: "Terms & Conditions" },
  //                { name: "404", label: "404 Page" },
  //              ],
  //            },
  //            {
  //              name: "account",
  //              label: "Account",
  //              items: [
  //                { name: "signin", label: "Sign In" },
  //                { name: "signin-image", label: "Sign In Image" },
  //                { name: "signup", label: "Sign Up" },
  //                { name: "signup-image", label: "Sign Up Image" },
  //                { name: "reset-pass", label: "Reset Password" },
  //              ],
  //            },
  //          ],
  //        },
  //        {
  //          name: "https://uxtheme.net/product-support/",
  //          label: "Support",
  //          isExternal: true,
  //        },
];
