import * as React from 'react'

const faq = {
  title: "Frequently asked questions",
  // description: '',
  items: [
    {
      q: "What is IMS?",
      a: (
        <>
          IMS (Inventory Management System) is a software solution for managing
          organizational assets. It allows you to assign assets to employees,
          transfer assets, manage stock levels, handle repairs, track vendor
          information, manage bills, and much more.
        </>
      ),
    },
    {
      q: "How does IMS help in managing assets?",
      a: "IMS makes managing your assets easy. You can quickly assign and transfer assets to employees, keep track of stock levels, handle repairs, and see the history of each item. This reduces paperwork and helps you use your assets better.",
    },
    {
      q: "If someone asked for a list of my company's assets, how would IMS help?",
      a: "IMS gives you one place to see and manage all your assets. You can quickly make reports showing where each asset is, its condition, and how it's being used. This makes it easy to answer questions about your assets accurately and fast.",
    },
    {
      q: "Is it possible to track the history of inventory items?",
      a: "Yes, IMS keeps a detailed history of all inventory items. This includes information on asset assignments, transfers, repairs, and other activities. You can easily access this history to make smart decisions.",
    },
    {
      q: "Can IMS handle both employee and vendor management?",
      a: "Yes, IMS helps you manage both employees and vendors. You can track which assets are assigned to employees, onboard and offboard employees with ease, and keep a record of their assigned assets. For vendors, IMS lets you track vendor information, manage bills, and monitor vendor performance.",
    },
    {
      q: "Can IMS help in managing bills and expenses?",
      a: "Absolutely. IMS includes features for managing bills and expenses related to assets and vendors. You can track expenses, view billing details, and generate financial reports to gain insights into your spending.",
    },
    {
      q:"Is IMS suitable for small and large organizations?",
      a:"Yes, IMS is designed to meet the needs of organizations of all sizes. Whether you're a small business or a large enterprise, IMS can help you manage your assets efficiently.",
    },
    {
      q: "How can I get started with IMS?",
      a: "Getting started with IMS is easy. Simply sign up for a free trial on our website, and our onboarding team will guide you through the setup process. You can also contact our support team for any assistance you may need.",
    },
  ],
};

export default faq
