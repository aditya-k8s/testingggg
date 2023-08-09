import React,{useEffect, useState} from "react";

import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Techwork() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Function to switch to the next tab automatically every 3 seconds
    const switchTabAutomatically = () => {
      const totalTabs = 3; // Replace 3 with the total number of tabs you have
      setActiveTab((prevTab) => (prevTab + 1) % totalTabs);
    };

    const intervalId = setInterval(switchTabAutomatically, 5000); // Switch every 5 seconds
    return () => clearInterval(intervalId); // Cleanup function to clear the interval on unmount
  }, []);
  return (
    <section className="techwork">
      <svg
        className="back-orange-art"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="300"
        data-aos-offset="0"
        xmlns="http://www.w3.org/2000/svg"
        width="252.883"
        height="123.877"
        viewBox="0 0 252.883 123.877"
      >
        <g
          id="Group_68"
          data-name="Group 68"
          transform="translate(-4187.117 -707.061)"
        >
          <rect
            id="Rectangle_99"
            data-name="Rectangle 99"
            width="123.877"
            height="252.883"
            rx="61.939"
            transform="translate(4440 707.061) rotate(90)"
            fill="#f38020"
            opacity="0.05"
          ></rect>
          <rect
            id="Rectangle_100"
            data-name="Rectangle 100"
            width="74.596"
            height="202.142"
            rx="37.298"
            transform="translate(4414.629 731.702) rotate(90)"
            fill="#f38020"
            opacity="0.05"
          ></rect>
          <rect
            id="Rectangle_101"
            data-name="Rectangle 101"
            width="35.472"
            height="150.653"
            rx="17.736"
            transform="translate(4388.885 751.264) rotate(90)"
            fill="#f38020"
            opacity="0.05"
          ></rect>
          <rect
            id="Rectangle_102"
            data-name="Rectangle 102"
            width="10.297"
            height="111.304"
            rx="5.148"
            transform="translate(4369.21 763.851) rotate(90)"
            fill="#f38020"
            opacity="0.05"
          ></rect>
        </g>
      </svg>

      <div className="techwork-inner container">
        <div className="sec-heading">
          <div
            className="sap-caption-head"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
            data-aos-offset="0"
          >
            <div className="sap-caption">our proficiency</div>
          </div>
          <div
            className="sap-lg-heading"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            Tools and Technologies
          </div>
        </div>

        {/* 04-08-2023 start*/}
        {/* <div className="logo-scroller">
          <article className="wrapper">
            <div className="marquee">
              <div className="marquee__group">
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/android.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/google.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/laravel.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img src="/assets/images/scroller-logos/wp.png" alt="..." />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/magento.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/figma.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img src="/assets/images/scroller-logos/ios.png" alt="..." />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/angular-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/aws-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/css3-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/golang-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/html5-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/react-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/621f8f94654abf384c30d63c.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Ansible_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Apache_Flink_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Apache_kafka_wordtype.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Apache_Spark_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Bamboo_Logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Bootstrap_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/C_Sharp_wordmark.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Cassandra_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/CentOS-Logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Circleci-icon-logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Corona_SDK_Logo-700x594.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Debian_logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/django-logo-positive.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/drupal-wordmark.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Elasticsearch_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Expressjs.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Fedora_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Firebase_Logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Apache_Maven_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Bitbucket_Logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Chef_logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/GitHub_logo_2013.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Ajax_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Blazor.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/CibUmbracoCoreUiIcons.svg"
                    alt="..."
                  />
                </div>
              </div>

              <div aria-hidden="true" className="marquee__group">
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/android.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/google.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/laravel.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img src="/assets/images/scroller-logos/wp.png" alt="..." />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/magento.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/figma.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img src="/assets/images/scroller-logos/ios.png" alt="..." />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/angular-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/aws-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/css3-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/golang-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/html5-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/react-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Flask_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/FreeBSD_textlogo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Git-logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Google_Cloud_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Hadoop_logo_new.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/hbase_logo_with_orca_large.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/horizontal-logo-monochromatic-white.webp"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/IBM_Cloud_logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Ionic_Logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/ISO_C++_Logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/JavaScript-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Jenkins_logo_with_title.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Joomla!-Logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Kotlin_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Kubernetes_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Linux_logo.jpg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Logo-redis.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/MacOS_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/GitLab_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Gradle_logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Grafana_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Kentico-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/MVC.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/NET_Core_Logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Orchard_logo_1.svg"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <div className="marquee marquee--reverse">
              <div className="marquee__group">
                <div className="img-scroll">
                  <img src="/assets/images/scroller-logos/ps.png" alt="..." />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/flutter.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/shopify.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/semrush.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img src="/assets/images/scroller-logos/ai.png" alt="..." />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/codeigniter.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/sketch.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/java-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/net-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/php-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/rails-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/swift-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/vue-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/mahout-logo-blue.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/MariaDB_colour_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/materialui logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Microsoft_Azure_Logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Microsoft-CogTK.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/microsoft-sql-server-logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/MongoDB_Logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/MySQL-Logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/NativeScript_Logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/New_Power_BI_Logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Node.js_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/objective-c-logo-81746870EF-seeklogo.com.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/OpenCV_Logo_with_text.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Oracle_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/oracle-cloud.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/phonegap-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/pngwing.com.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Postgresql_elephant.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Pytorch_logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/JUnit_5_Banner.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Nagios_logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Prometheus_software_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Puppet_transparent_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/pngegg1.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/pngegg2.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/pngegg.png"
                    alt="..."
                  />
                </div>
              </div>

              <div aria-hidden="true" className="marquee__group">
                <div className="img-scroll">
                  <img src="/assets/images/scroller-logos/ps.png" alt="..." />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/flutter.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/shopify.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/semrush.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img src="/assets/images/scroller-logos/ai.png" alt="..." />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/codeigniter.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/sketch.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/java-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/net-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/php-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/rails-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/swift-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/vue-logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/ruby_original_wordmark_logo_icon_146364.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Rust_logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Sass_Logo_Color.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Scala-full-color.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Scikit_learn_logo_small.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Splunk_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/SQLite370.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Tableau_Logo.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Tailwind_CSS_Logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/TeamCity_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/TensorFlow_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/travis-ci-logo-png-transparent.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Typescript_logo_2020.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Ubuntu-logo-2022.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/UNIX_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/upload.wikimedia.org_wikipedia_commons_1_1b_R_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Webflow_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Windows_logo_-_2012.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Xamarin-logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Selenium_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Slack_Technologies_Logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Terraform_Logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/pngwingg.com.png"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/Progress_Software_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/The_LINQ_logo.svg"
                    alt="..."
                  />
                </div>
                <div className="img-scroll">
                  <img
                    src="/assets/images/scroller-logos/windowsCommunicationFoundationWcf.jpg"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </article>
        </div> */}
        {/* 04-08-2023 end */}
        
        <div className="tools-n-tech-tab">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="sap-tab-vert d-flex align-items-start"
          >
            <Tabs
             selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}
            >
              <TabList className="nav flex-column nav-pills me-3 react-tabs__tab-list">
                <Tab>
                  <div className="sap-sm-heading">React js</div>
                </Tab>
                <Tab>
                  <div className="sap-sm-heading">Angular js</div>
                </Tab>
                <Tab>
                  <div className="sap-sm-heading">Node js</div>
                </Tab>
              </TabList>

              <div className="tab-content">
                <TabPanel>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="home-tech-thumb-head">
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                    </div>
                  </motion.div>
                </TabPanel>

                <TabPanel>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="home-tech-thumb-head">
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                    </div>
                  </motion.div>
                </TabPanel>

                <TabPanel>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="home-tech-thumb-head">
                    <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                      <div className="home-tech-thumb-inner">
                        <img src="/assets/images/scroller-logos/ps.png" alt="" />
                      </div>
                    </div>
                  </motion.div>
                </TabPanel>
              </div>
            </Tabs>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Techwork;
