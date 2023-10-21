import React, { useContext } from "react";
import ourServices from "../../Assets/BannerImg/our-services.jpg";
import img001 from "../../Assets/BannerImg/001.jpg";
import img002 from "../../Assets/BannerImg/warehouse-operation.jpg";
import img003 from "../../Assets/BannerImg/loading-unloading.jpg";
import img004 from "../../Assets/BannerImg/transport.jpg";
import img005 from "../../Assets/BannerImg/005.jpg";
import img006 from "../../Assets/BannerImg/reloaction.jpg";
import { AuthContext } from "../../Context/ContextData";

const OurServices = () => {
  const { language } = useContext(AuthContext);
  return (
    <div>
      {language === "en" ? (
        <div className="lg:top-[-50px] md:top-[-30px] top-[-20px] relative -z-0">
          <img src={ourServices} alt="" className="w-full" />
          <h1 className="my-10 text-[36px] font-bold text-center">
            Our Services
          </h1>
          <div
            className="card xl:card-side bg-base-100 shadow-xl mx-10"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <figure className="xl:w-1/2">
              <img src={img004} alt="Album" className="w-full h-full" />
            </figure>
            <div className="card-body xl:w-1/2">
              <h2 className="card-title font-bold">TRANSPORTATION SERVICE</h2>
              <p>
                JIT DELIVER is offering transportation services. We take
                additional care and maintain security while transporting your
                goods because we realize that your goods are a valuable asset.
                Almost like the products, relocation, and transfer of goods are
                carried all over Bangladesh.
              </p>
              <p>
                We do relocate any kind of products to other destinations all
                over Bangladesh. We mostly satisfy our customers with the safety
                and security standards and ensure that the client's products
                reach the client's destination on time. So, our Transportation,
                Packers and Movers in the Dhaka division are here to unravel the
                matter of transporting your valuable goods.
              </p>
              <p>
                We offer secure cover vans in different sizes based on your
                requirements for the transfer of your goods. Our friendly staff
                will do whatever they will to supply you with the specified
                details. Any complaint as regards our services from our
                customers is treated with a high degree of seriousness and is
                rectified as soon as possible.
              </p>
              <p>
                We arrange for the safety of your van at every step, whether
                it’s loading or relocation. Our professional staff is liable for
                completing the whole task with care and on time. Service
                delivered on time is slogan.
              </p>
            </div>
          </div>
          <div
            className="card xl:card-side bg-base-100 shadow-xl mx-10 my-10"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <figure className="xl:w-1/2">
              <img src={img001} alt="Album" className="w-full h-full" />
            </figure>
            <div className="card-body xl:w-1/2">
              <h2 className="card-title font-bold uppercase">
                Packing & shifting Services
              </h2>
              <p>
                We are reliable packers and movers in the Dhaka division and all
                over Bangladesh. Moving from one location to a different one is
                often an irritating task in itself. We take extra precautions
                required to make sure that our customer's precious goods aren’t
                damaged during the process of transportation. Generic shipping
                cartons, boxes, and tapes are used very carefully. We are
                engaged in offering a best-quality range of Packing & moving
                services to our clients, partners, and stakeholders. Goods are
                sealed properly before they’re loaded.
              </p>
              <p>
                Our clients can remain assured about the security of their
                belongings. We pride ourselves on offering great packing and
                moving services at reasonable prices. All our employees are
                experienced, respectful, and careful about client's products and
                services. Our packing center has well-qualified and trained
                staff who are excellent at packing your household goods. The
                whole process of packing is accomplished under the strict
                guidance of our experts. offering great packing and moving
                services at reasonable prices. All our employees are
                experienced, respectful, and careful about client's products and
                services. Our packing center has well-qualified and trained
                staff who are excellent at packing your household goods. The
                whole process of packing is accomplished under the strict
                guidance of our experts.
              </p>
            </div>
          </div>
          <div
            className="card xl:card-side bg-base-100 shadow-xl mx-10"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <figure className="xl:w-1/2">
              <img src={img002} alt="Album" className="w-full h-full" />
            </figure>
            <div className="card-body xl:w-1/2">
              <h2 className="card-title font-bold uppercase">
                Warehouse Operation Support Service
              </h2>
              <p>
                Warehouse support services involve providing various forms of
                assistance, expertise, and resources to optimize the operations
                and management of a warehouse facility. This service is
                typically offered by third-party providers or as a specialized
                department within a company. Its goal is to ensure the smooth
                functioning of day-to-day warehouse activities, improve
                efficiency, and enhance overall productivity.
              </p>
              <p>
                <span className="font-bold">Operational Guidance:</span>{" "}
                Providing advice and recommendations on warehouse layout
                optimization, inventory management strategies, order-picking
                methodologies, right dispatch ensured, invoice controlled, and
                other operational aspects. This guidance is aimed at improving
                efficiency and reducing bottlenecks.
              </p>
              <p>
                <span className="font-bold">Process Improvement:</span>{" "}
                Conducting regular assessments of warehouse processes to
                identify areas for improvement. This could involve analyzing
                data, identifying inefficiencies, and proposing changes to
                streamline operations.
              </p>
              <p>
                <span className="font-bold">Inventory Management: </span>{" "}
                Assisting in maintaining accurate inventory records system vs.
                physical accuracy, conducting regular cycle physical counts, and
                ensuring that stock levels are aligned with the system. This
                helps prevent overstocking, stock outs, and discrepancies in
                inventory levels.
              </p>
            </div>
          </div>
          <div
            className="card xl:card-side bg-base-100 shadow-xl mx-10 my-10"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <figure className="xl:w-1/2">
              <img src={img003} alt="Album" className="w-full h-full" />
            </figure>
            <div className="card-body xl:w-1/2">
              <h2 className="card-title font-bold">
                LOADING AND UNLOADING SERVICE
              </h2>
              <p>
                JIT DELIVER has accomplished a good range of Packing, Loading &
                Unloading Services for loading and unloading cargo. Loading the
                products is additionally important to us as many of the products
                are damaged during this process. We do offer for the movement of
                products by trucks or any transportation. The relocation of
                household goods is completed timely without causing any anxiety
                to our customers.
              </p>
              <p>
                We train our employees in a way that they handle all the
                products very carefully without posing any harm to them. Our
                skilled workforce would never let your precious belongings
                undergo any kind of damage. In such a scenario, the fragile
                items will certainly break. Our company has been productive in
                providing skilled Loading and Unloading Services. With the help
                of our skillful skilled laborers, we provide safe loading and
                unloading of our client’s goods.
              </p>
              <p>
                Our loading and unloading services depend upon our customers’
                convenience, instead of our own ease. The large problem with
                most unprofessional packers and movers is that they do not have
                the right loading and unloading technique. To be precise, the
                difficulty is how the products are organized which results in
                major errors in transit. Imagine a situation when a driver
                applies the brakes and a box filled with heavier items is loaded
                with a couple of lighter and fragile items onto another one.
              </p>
            </div>
          </div>
          <div
            className="card xl:card-side bg-base-100 shadow-xl mx-10 my-10"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <figure className="xl:w-1/2">
              <img src={img005} alt="Album" className="w-full h-full" />
            </figure>
            <div className="card-body xl:w-1/2">
              <h2 className="card-title font-bold">HOUSEHOLD SHIFTING</h2>
              <p>
                We offer house-shifting services in major Dhaka Division. We
                simplify all the complicated tasks related to your home
                relocation services, taking care of your goods while working
                with transparency and safety.
              </p>
              <p>
                JIT DELIVER has been rendering home relocation services which
                include assisting our clients in permanently shifting things
                from one place to a different one. Numerous people hire the
                house relocating service for shifting their house to a new
                place. We provide the house relocation service at an affordable
                price. Our experts have the knowledge to handle any quiet
                household goods with no hassle. We offer the top to finish
                moving and packing services. Our experts bring the whole thing
                for packing the products like bubble wrap, box, packing tape,
                scissors, etc. We’ve tons of experience within the house
                relocating services so we provide the best relocation services
                at reasonable rates.
              </p>
            </div>
          </div>
          <div
            className="card xl:card-side bg-base-100 shadow-xl mx-10"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <figure className="xl:w-1/2">
              <img src={img006} alt="Album" className="w-full h-full" />
            </figure>
            <div className="card-body xl:w-1/2">
              <h2 className="card-title font-bold">
                CORPORATE RELOCATION SERVICE IN BANGLADESH
              </h2>
              <p>
                JIT DELIVER services are to relocate offices within the same
                city from one place to a different, also in different cities. We
                provide a spread of Corporate Relocation services. JIT DELIVER
                offers relocation facilities for corporate goods in all over
                Bangladesh.
              </p>
              <p>
                Our experience Packers and moving services help businesses find
                the best service provider deals. Expert values, customer
                sentiments. We are documented for providing extraordinary
                shifting services to customers within the industry. Relocation
                service providers are on the increase today.
              </p>
              <p>
                At a given location they shift industrial materials. Best
                enterprise hiring is the location’s daunting task. this type of
                service provider meets customer needs and measures overall stock
                trading. Moving critical materials just as monitors, papers, fax
                machines, chairs, cupboards, printers, tables, and far more is a
                long process. Professionals store all records in different boxes
                inside the office. They’re shifting to second-phase furniture.
                Expertise rearranges essential location-based things consistent
                with your convenience.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:top-[-50px] md:top-[-30px] top-[-20px] relative -z-0">
          <img src={ourServices} alt="" className="w-full" />
          <h1 className="my-10 text-[36px] font-bold text-center">
            জেআইটি ডেলিভারের সাশ্রয়ী মূল্যের পরিষেবা
          </h1>
          <div
            className="card xl:card-side bg-base-100 shadow-xl mx-10"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <figure className="xl:w-1/2">
              <img src={img004} alt="Album" className="w-full h-full" />
            </figure>
            <div className="card-body xl:w-1/2">
              <h2 className="card-title font-bold">
                সমগ্র বাংলাদেশ পরিবহন পরিষেবা
              </h2>
              <p>
                জেআইটি ডেলিভার পরিবহন পরিষেবা প্রদান করছে। আপনার পণ্য পরিবহনের
                সময় আমরা অতিরিক্ত যত্ন নিই এবং নিরাপত্তা বজায় রাখি কারণ আমরা
                বুঝতে পারি যে আপনার পণ্যগুলি একটি মূল্যবান সম্পদ। আমরা সারা
                বাংলাদেশে যেকোনো ধরনের পণ্য অন্য গন্তব্যে স্থানান্তর করি।
              </p>
              <p>
                আমরা বেশিরভাগই আমাদের গ্রাহকদের নিরাপত্তা এবং নিরাপত্তার মান
                দিয়ে সন্তুষ্ট করি এবং নিশ্চিত করি যে ক্লায়েন্টের পণ্যগুলি
                সময়মতো ক্লায়েন্টের গন্তব্যে পৌঁছায়। তাই, ঢাকা বিভাগের আমাদের
                ট্রান্সপোর্টেশন, টীম আপনার মূল্যবান পণ্য পরিবহনের বিষয়টি
                পর্যবেক্ষণ করতে এখানে রয়েছে।
              </p>
              <p>
                আমরা আপনার পণ্য স্থানান্তরের জন্য আপনার প্রয়োজনীয়তার উপর
                ভিত্তি করে বিভিন্ন আকারের নিরাপদ কভার ভ্যান অফার করি। আমাদের
                বন্ধুত্বপূর্ণ কর্মীরা আপনাকে নির্দিষ্ট বিবরণ দিয়ে যা সরবরাহ
                করবে তা সন্তুষ্ট করবে। আমাদের গ্রাহকদের কাছ থেকে আমাদের পরিষেবা
                সংক্রান্ত যে কোনও অভিযোগকে উচ্চ মাত্রার গুরুত্ব সহকারে বিবেচনা
                করা হয় এবং যত তাড়াতাড়ি সম্ভব সংশোধন করা হয়।
              </p>
              <p>
                আমরা প্রতিটি পদক্ষেপে আপনার ভ্যানের নিরাপত্তার ব্যবস্থা করি, তা
                লোড করা হোক বা স্থানান্তর হোক। আমাদের পেশাদার কর্মীরা যত্ন
                সহকারে এবং সময়মতো পুরো কাজটি সম্পূর্ণ করার জন্য দায়বদ্ধ।
                যথাসময়ে সেবা প্রদানই আমাদের লক্ষ্য। সুতরাং, আমাদের সাথে যোগাযোগ
                করুন এবং নিশ্চিত হন যে আপনার গাড়িটি বাংলাদেশের স্বনামধন্য এবং
                নিরাপদ পরিবহনের হাতে রয়েছে। এমনকি আপনি আপনার চালান-ভিত্তিক
                ট্র্যাকিং সিস্টেমের মাধ্যমে আপনার ট্রাক/যানবাহন ট্র্যাক করতে
                পারবেন।
              </p>
            </div>
          </div>
          <div
            className="card xl:card-side bg-base-100 shadow-xl mx-10 my-10"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <figure className="xl:w-1/2">
              <img src={img001} alt="Album" className="w-full h-full" />
            </figure>
            <div className="card-body xl:w-1/2">
              <h2 className="card-title font-bold uppercase">
                প্যাকিং এবং স্থানান্তর পরিষেবা
              </h2>
              <p>
                আমরা ঢাকা বিভাগ এবং সারা বাংলাদেশে নির্ভরযোগ্য প্যাকার এবং
                মুভার। পণ্য সামগ্রি এক স্থান থেকে অন্য স্থানে নেয়া প্রায়শই একটি
                বিরক্তিকর এবং ঝুঁকিপূর্ণ কাজ। পরিবহন প্রক্রিয়া চলাকালীন আমাদের
                গ্রাহকের মূল্যবান পণ্য যাতে ক্ষতিগ্রস্ত না হয় তা নিশ্চিত করার
                জন্য আমরা প্রয়োজনীয় সতর্কতা অবলম্বন করে থাকি। বিশেষ করে শিপিং
                কার্টন, বাক্স এবং টেপ খুব সাবধানে ব্যবহার করা হয়। আমরা আমাদের
                ক্লায়েন্ট, অংশীদার এবং স্টেকহোল্ডারদের প্যাকিং এবং মুভিং
                পরিষেবাগুলির একটি সর্বোত্তম মানের সুবিধা অফার করে থাকি। পণ্যগুলি
                লোড করার আগে সঠিকভাবে সিল করা হয়। আমাদের ক্লায়েন্টরা তাদের
                জিনিসপত্রের নিরাপত্তা সম্পর্কে নিশ্চিত থাকতে পারে। আমরা
                যুক্তিসঙ্গত মূল্যে দুর্দান্ত প্যাকিং এবং চলমান পরিষেবাগুলি অফার
                করার জন্য নিজেদেরকে গর্বিত মনে করি।
              </p>
              <p>
                আমাদের সমস্ত কর্মচারী অভিজ্ঞ, শ্রদ্ধাশীল এবং ক্লায়েন্টের পণ্য
                এবং পরিষেবার বিষয়ে সতর্ক। আমাদের পাকিং সেন্টারে সু-যোগ্য এবং
                প্রশিক্ষিত কর্মী রয়েছে যারা আপনার গৃহস্থালীর জিনিসপত্র প্যাক
                করার ক্ষেত্রে এক এবং অদ্বিতীয় । প্যাকিংয়ের পুরো প্রক্রিয়াটি
                আমাদের বিশেষজ্ঞদের কঠোর নির্দেশনার অধীনে সম্পন্ন করা হয়।
                যুক্তিসঙ্গত দামে দুর্দান্ত প্যাকিং এবং চলমান পরিষেবা সরবরাহ করা।
                আমাদের সমস্ত কর্মচারী অভিজ্ঞ, শ্রদ্ধাশীল এবং ক্লায়েন্টের পণ্য
                এবং পরিষেবার বিষয়ে সতর্ক অবস্থানে থাকে। আমাদের প্যাকিং সেন্টারে
                সু-যোগ্য এবং প্রশিক্ষিত কর্মী রয়েছে যারা আপনার গৃহস্থালীর
                জিনিসপত্র প্যাক করার ক্ষেত্রে অসাধারণ ভূমিকা রাখে। প্যাকিংয়ের
                পুরো প্রক্রিয়াটি আমাদের বিশেষজ্ঞদের কঠোর নির্দেশনার অধীনে
                সম্পন্ন করা হয়।
              </p>
            </div>
          </div>
          <div
            className="card xl:card-side bg-base-100 shadow-xl mx-10"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <figure className="xl:w-1/2">
              <img src={img002} alt="Album" className="w-full h-full" />
            </figure>
            <div className="card-body xl:w-1/2">
              <h2 className="card-title font-bold uppercase">
                ওয়্যারহাউস অপারেশন সহায়ক সেবা
              </h2>
              <p>
                ওয়্যারহাউস সহায়তা পরিষেবাগুলি একটি গুদাম সুবিধার ক্রিয়াকলাপ
                এবং পরিচালনাকে অপ্টিমাইজ করার জন্য বিভিন্ন ধরণের সহায়তা, দক্ষতা
                এবং সংস্থান সরবরাহ করে। এই পরিষেবাটি সাধারণত তৃতীয়-পক্ষ
                প্রদানকারীরা বা একটি কোম্পানির মধ্যে একটি বিশেষ বিভাগ হিসাবে
                অফার করে। এর লক্ষ্য হল প্রতিদিনের গুদাম কার্যক্রমের মসৃণ
                কার্যকারিতা নিশ্চিত করা, দক্ষতা উন্নত করা এবং সামগ্রিক
                উত্পাদনশীলতা বৃদ্ধি করা।
              </p>
              <p>
                <span className="font-bold">অপারেশনাল গাইডলাইন :</span> গুদাম
                লেআউট অপ্টিমাইজেশান, ইনভেন্টরি ম্যানেজমেন্ট কৌশল, অর্ডার-পিকিং
                পদ্ধতি, সঠিক ডেলিভারি নিশ্চিত করা, চালান নিয়ন্ত্রিত এবং
                অন্যান্য অপারেশনাল দিকগুলির উপর পরামর্শ এবং সুপারিশ প্রদান করা।
                এই নির্দেশিকাটি হল ওয়্যারহাউস পরিচালনায় দক্ষতার উন্নতি এবং
                বাধাগুলি হ্রাস করার লক্ষ্যে চলমান কাজ ।
              </p>
              <p>
                <span className="font-bold">প্রক্রিয়ার উন্নতি:</span> উন্নতির
                জন্য ক্ষেত্রগুলি চিহ্নিত করতে গুদাম প্রক্রিয়াগুলির নিয়মিত
                মূল্যায়ন পরিচালনা করা। এতে ডেটা বিশ্লেষণ, অদক্ষতা চিহ্নিত করা
                এবং স্ট্রিমলাইন অপারেশনে পরিবর্তনের প্রস্তাব অন্তর্ভুক্ত করা।
              </p>
              <p>
                <span className="font-bold">ইনভেন্টরি ম্যানেজমেন্ট: </span> সঠিক
                ইনভেন্টরি রেকর্ড সিস্টেম বনাম শারীরিক নির্ভুলতা বজায় রাখতে
                সহায়তা করা, নিয়মিত চক্র শারীরিক গণনা পরিচালনা করা এবং নিশ্চিত
                করা যে স্টক স্তরগুলি সিস্টেমের সাথে সংযুক্ত রয়েছে। এটি
                ওভারস্টকিং, স্টক আউট এবং ইনভেন্টরি লেভেলের অসঙ্গতি রোধ করতে
                সহায়তা করে।
              </p>
              <p>
                <span className="font-bold">পরিপূর্ণ অর্ডার প্রসেসিং: </span>{" "}
                অর্ডার পিকিং, প্যাকিং এবং শিপিং সহ অর্ডার পূরণ প্রক্রিয়ায়
                সহায়তা প্রদান করা। এই সমর্থন নিশ্চিত করতে সাহায্য করে যে অর্ডার
                সঠিকভাবে এবং একটি সময়মত পদ্ধতিতে প্রক্রিয়া করা হয়।
              </p>
              <p>
                যাইহোক, আমরা এক দরজা থেকে অন্য দরজায় পণ্যগুলি প্যাকিং, লোডিং,
                সরানো এবং আনলোড করার বিষয়ে আরও স্থির। আপনার জন্য সবকিছু সহজ
                করার জন্য, আমরা স্টোরেজ এবং গুদামজাতকরণের সহায়তা পরিষেবাগুলি
                অফার করি। আপনার পণ্যগুলি নিরাপদ ভাবে ক্রেতার যতক্ষণ না তাদের
                গন্তব্য তার স্থান নির্ধারণের জন্য প্রস্তুত হয়।
              </p>
            </div>
          </div>
          <div
            className="card xl:card-side bg-base-100 shadow-xl mx-10 my-10"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <figure className="xl:w-1/2">
              <img src={img003} alt="Album" className="w-full h-full" />
            </figure>
            <div className="card-body xl:w-1/2">
              <h2 className="card-title font-bold">
                লোডিং এবং আনলোডিং পরিষেবা
              </h2>
              <p>
                জেআইটি ডেলিভার কার্গো, লোডিং এবং আনলোডিং পরিষেবাগুলির একটি ভাল
                অবস্তানে রয়েছে। পণ্য লোড করা আমাদের কাছে অতিরিক্ত গুরুত্বপূর্ণ
                কারণ এই প্রক্রিয়া চলাকালীন অনেক পণ্য ক্ষতিগ্রস্ত হয়। আমরা
                ট্রাক বা কোনো পরিবহন এই গুরুত্বপূর্ণ সার্ভিস পণ্য চলাচলের জন্য
                অফার করি। আমাদের গ্রাহকদের কোন উদ্বেগ সৃষ্টি না করেই গৃহস্থালীর
                জিনিসপত্র স্থানান্তর সময়মত সম্পন্ন হয়।
              </p>
              <p>
                আমরা আমাদের কর্মীদের এমনভাবে প্রশিক্ষণ দিই যাতে তারা পণ্যের কোনো
                ক্ষতি না করেই খুব সাবধানে সমস্ত পণ্য পরিচালনা করে। আমাদের দক্ষ
                কর্মীবাহিনী কখনই আপনার মূল্যবান জিনিসপত্রের কোনো ধরনের ক্ষতির
                মধ্য দিয়ে যাক এমনটা করে না। এই ধরনের পরিস্থিতিতে, ভঙ্গুর আইটেম
                অবশ্যই ভেঙ্গে যাবে যদি না তার উপযুক্ত পদক্ষেপ গ্রহন করা হয়।
                আমাদের কোম্পানি দক্ষ শ্রমিকদের সাহায্যে লোডিং এবং আনলোডিং
                পরিষেবা প্রদানে আরও সক্রিয়; আমরা আমাদের ক্লায়েন্টের পণ্যগুলির
                নিরাপদ লোডিং এবং আনলোডিং প্রদান করি।
              </p>
              <p>
                আমাদের লোডিং এবং আনলোডিং পরিষেবাগুলি আমাদের নিজস্ব সন্তুষ্টির
                পরিবর্তে আমাদের গ্রাহকদের সুবিধার উপর নির্ভর করে। বেশিরভাগ
                অপ্রফেশনাল প্যাকার এবং মুভারদের বড় সমস্যা হল তাদের সঠিক লোডিং
                এবং আনলোডিং কৌশল নেই। সুনির্দিষ্টভাবে বলতে গেলে, অসুবিধা হল
                পণ্যগুলি কীভাবে সংগঠিত হয় যার ফলে ট্রানজিটে বড় ত্রুটি হয়। এমন
                একটি পরিস্থিতি কল্পনা করুন যখন একজন ড্রাইভার ব্রেক প্রয়োগ করে
                এবং একটি বাক্সে ভারি আইটেম ভরা কয়েকটি হালকা এবং ভঙ্গুর আইটেম
                অন্য একটিতে লোড করা হয়। তাই আমরা জটিল কাজগুলোকে সতর্কতার সাথে
                সহজ করি।
              </p>
            </div>
          </div>
          <div
            className="card xl:card-side bg-base-100 shadow-xl mx-10 my-10"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <figure className="xl:w-1/2">
              <img src={img005} alt="Album" className="w-full h-full" />
            </figure>
            <div className="card-body xl:w-1/2">
              <h2 className="card-title font-bold">
                বাসাবাড়ির স্থানান্তর পরিষেবা
              </h2>
              <p>
                সেবা প্রদানই আমাদের লক্ষ্য। সুতরাং, আমাদের সাথে যোগাযোগ করুন এবং
                নিশ্চিত হন যে আপনার গাড়িটি বাংলাদেশের স্বনামধন্য এবং নিরাপদ
                পরিবহনের হাতে রয়েছে। এমনকি আপনি আপনার চালান-ভিত্তিক ট্র্যাকিং
                সিস্টেমের মাধ্যমে আপনার ট্রাক/যানবাহন ট্র্যাক করতে পারবেন।
              </p>
              <p>
                আমরা ঢাকা বিভাগে হাউস-শিফটিং পরিষেবা অফার করি। আমরা স্বচ্ছতা এবং
                নিরাপত্তার সাথে কাজ করার সময় আপনার মালামালের যত্ন নেওয়া, আপনার
                বাড়ির স্থানান্তর পরিষেবা সম্পর্কিত সমস্ত জটিল কাজগুলিকে সহজ করে
                দিই৷ জেআইটি ডেলিভার হোম রিলোকেশন পরিষেবা প্রদান করছে যার মধ্যে
                রয়েছে আমাদের ক্লায়েন্টদের স্থায়ীভাবে জিনিসগুলি এক জায়গা থেকে
                অন্য জায়গায় স্থানান্তর করতে সহায়তা করা। অনেক লোক তাদের বাড়ি
                একটি নতুন জায়গায় স্থানান্তর করার জন্য বাড়ি স্থানান্তর পরিষেবা
                ভাড়া করে। আমরা সাশ্রয়ী মূল্যে বাড়ি স্থানান্তর পরিষেবা প্রদান
                করি। আমাদের বিশেষজ্ঞদের কাছে কোনো ঝামেলা ছাড়াই যেকোনো মূল্যবান
                গৃহস্থালির জিনিসপত্র পরিচালনা করার জ্ঞান আছে। আমাদের বিশেষজ্ঞরা
                বুদবুদ মোড়ানো, বাক্স, প্যাকিং টেপ, কাঁচি এবং যা কিছু প্রয়োজন
                তার মতো প্যাকিং পণ্য সরবরাহ করে। বাড়ি স্থানান্তর পরিষেবাগুলিতে
                আমাদের প্রচুর অভিজ্ঞতা রয়েছে তাই আমরা যুক্তিসঙ্গত হারে
                সর্বোত্তম স্থানান্তর পরিষেবা সরবরাহ করি।
              </p>
            </div>
          </div>
          <div
            className="card xl:card-side bg-base-100 shadow-xl mx-10"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <figure className="xl:w-1/2">
              <img src={img006} alt="Album" className="w-full h-full" />
            </figure>
            <div className="card-body xl:w-1/2">
              <h2 className="card-title font-bold">
                সারা বাংলাদেশে কর্পোরেট রিলোকেশন সার্ভিস
              </h2>
              <p>
                জেআইটি ডেলিভারের পরিষেবাগুলি হল একই শহরের মধ্যে কর্পোরেট অফিস এক
                জায়গা থেকে অন্য জায়গায়, এছাড়াও বিভিন্ন শহরে স্থানান্তর করার
                বিষয়টি। আমরা কর্পোরেট রিলোকেশন পরিষেবার বিস্তার প্রদান করি
                আমাদের সার্ভিস এর মাধ্যমে । জেআইটি ডেলিভার সারা বাংলাদেশে
                কর্পোরেট পণ্যের জন্য স্থানান্তর সুবিধা প্রদান করে থাকে।
              </p>
              <p>
                প্যাকারস এবং মুভার্স পরিষেবাগুলির সাথে আমাদের অভিজ্ঞতা ব্যাপক
                তাই অফিস স্থানান্তর সর্বোত্তম পরিষেবা প্রদানকারীর ডিল খুঁজে পেতে
                সহায়তা আমরাই করে থাকি৷ বিশেষজ্ঞ মান, গ্রাহক অনুভূতি. শিল্পের
                মধ্যে গ্রাহকদের অসাধারণ স্থানান্তর পরিষেবা প্রদানের জন্য আমরা
                সেরা। কর্পোরেট রিলোকেশন সার্ভিস গ্রাহকের চাহিদা পূরণ করে এবং
                সামগ্রিক স্টক ট্রেডিং পরিমাপ করে।
              </p>
              <p>
                বিশেষকরে কর্পোরেট গুরুত্বপূর্ণ সামগ্রী যেমন মনিটর, কাগজপত্র,
                ফ্যাক্স মেশিন, চেয়ার, আলমারি, প্রিন্টার, টেবিল এবং আরও অনেক
                কিছুর মতো গুরুত্বপূর্ণ উপকরণগুলি সরানো একটি দীর্ঘ প্রক্রিয়া।
                পেশাদাররা অফিসের ভিতরে বিভিন্ন বাক্সে সমস্ত রেকর্ড সংরক্ষণ কর
                এবং সেগুলো একটা প্রক্রিয়ার হিসাব করে তা একটি গুরুত্বপূর্ণ
                প্রক্রিয়ার মাধ্যমে সংরক্ষণ করা । আমাদের টিম অত্যাবশ্যকীয়
                উপাদানগুলিকে আলাদা রাখে যাতে সহজেই সনাক্ত করা যায়। দক্ষতা আপনার
                সুবিধার সাথে সামঞ্জস্যপূর্ণ প্রয়োজনীয় অবস্থান-ভিত্তিক
                জিনিসগুলিকে পুনর্বিন্যাস করে।
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurServices;
