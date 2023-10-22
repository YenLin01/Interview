import React, { useEffect } from "react";
import AOS from "aos";

const ResumeComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" p-3  resumeColor text-white aboutMe">
      <div className="container-lg " style={{ paddingTop: "2rem" }}>
        <h1 data-aos="zoom-in">學習期間的故事</h1>

        <div data-aos="fade-right" className="container-lg">
          <h2 data-aos="zoom-in" className="storyTitle">
            促使改變的關鍵
          </h2>
          <p data-aos="fade-right" className="container-lg">
            {" "}
            在上一份工作當中，我的職業是一位補習班老師，負責教導國小國中的小朋友，
            但礙於剛入職不久後便接到了兵單，出於如何才能為學生帶來更好的教學環境，最終與主管討論後認為離開這份職位，
            對於我或者是帶的班級都是更好的選擇 ，因此這份工作的持續的時間並不長⋯
            <br />
            在結束這份工作後我也去反思，儘管自己是本科系出身，但我真的想做這種安穩的工作嗎?
            在這份工作中看到的未來就是持續10到20年教授著大同小異的內容，雖這份工作不難也很安逸，
            但我現在還年輕，真的不該去嘗試一些新的事務嗎?
          </p>
          <h2 data-aos="zoom-in" className="storyTitle">
            學習的開始
          </h2>
          <p data-aos="fade-right" className="container-lg">
            當我在思考人生的下一步時，回憶起大學半工半讀擔任品檢員的時期，因工作上的需求，為了優化流程，我研究Excel
            成功創造出能夠提升工作效率的公式，並從中發現樂趣，得到了無可替代的成就感。
            他與程式兩者間的相同之處在於他們都是需要運用邏輯，且是可塑性極高的東西，Excel能創造出數組公式的功能，
            用來幫助使用者更高效地處理和分析資料。
            而在JavaScript則可以創造出function
            來指定特定的任務或操作，當時負責架構我們公司內部網站的工程師在使用我的電腦時看了我的公式，對我說「你其實邏輯還不錯欸，
            竟然可以想到用這個公式來整理公司的資料，你不如以後不要做本科系的東西了，來試試看程式設計！」
            這段回憶引發了我對資訊工程領域的思考。儘管當時受限於非本科背景，未敢踏出嘗試的步伐。
            <br />
            <br />
            在去年當兵前，偶然注意到Udemy上一門僅需390元的網頁全端課程，
            起初，我對資訊工程領域只是抱著好奇。抱著不試白不試的心態，毫不猶豫地購買了它。
            然而，隨著課程的進行，我開始逐步建立基礎的 HTML 網頁，運用 CSS
            增添網頁的外觀，並透過簡單的 JavaScript
            使網頁充滿活力。在這一過程中，我漸漸發現，
            我對於創造自己的東西充滿了激情，就像當初我創造出 Excel
            公式時所感受到的成就感一樣。這正是我在課程中所深刻體驗到的。
            <br />
          </p>
          <h2 data-aos="zoom-in" className="storyTitle">
            自學過程
          </h2>
          <p data-aos="fade-right" className="container-lg">
            本來預定10月要入伍，卻因確診錯過時機而延後至12月底。這段時間的空窗期為了生活考量半工半讀，儘管效率不高只能利用下班後的時間持續自學。
            這短短的兩個月讓我了解自己非天才型，而是努力型的人，自此決心服役後全心學習程式，好好培養關鍵的基本功。
            在軍旅生涯中有限的自由，不能使用手機。但新訓單位鼓勵我們寫日記，而這些日記他們不會檢查。因此在空閒的時間我便將學到的東西、遇到的問題記錄在其中，
            不斷複習，並在休息日專注解決這些問題。
            幸運的是鄰兵是資工系畢業，可以與他討論程式思路及未來規劃。
            期間大部分的工作都是機械性的，例如在進行無盡的掃地任務時，我曾經拿來思考JS如何製作出梯形星星或者提取特定字串等邏輯問題，
            畢竟漫長又無聊的生活，身體受限，思考成為我的寶貴伴侶。
          </p>
        </div>
      </div>

      <div className="container-lg" style={{ paddingTop: "2rem" }}>
        <h1 data-aos="zoom-in" className="Atitle">
          我處理問題方式
        </h1>
        <div className="container-lg">
          <div className="container row row-cols-1 row-cols-sm-2 ProblemBox">
            <div data-aos="zoom-out">
              <h4>理解問題</h4>
              <p className="inText">
                理解要求和限制。
                釐清關鍵問題點，並且收集所有可能有助於解決問題的信息和數據。
              </p>
            </div>
            <div data-aos="zoom-out">
              <h4>制定計畫</h4>
              <p className="inText">
                根據問題的性質和需求，制定解決問題的方案。
                確定解決問題的步驟和方法。
              </p>
            </div>
            <div data-aos="zoom-out">
              <h4>執行計畫</h4>
              <p className="inText">
                根據計劃一步一步地進行解題。
                確保按照計劃進行，並紀錄每一步的結果。
              </p>
            </div>
            <div data-aos="zoom-out">
              <h4>檢查結果</h4>
              <p className="inText">
                在解題過程中，經常檢查結果和進展。
                確保你正確地解決了問題，並且沒有錯誤。
              </p>
            </div>
            <div data-aos="zoom-out">
              <h4>調整和優化</h4>
              <p className="inText">
                根據檢查的結果進行調整和優化。
                持續改進我的解決方案，直到得到滿意的結果。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg" style={{ paddingTop: "2rem" }}>
        <h1 data-aos="zoom-in" className="Atitle">
          自學的經驗和困難的解決過程
        </h1>
        <div data-aos="fade-right" className="container-lg">
          <p className="container-lg">
            在自主學習的過程，我發現最具挑戰的情況通常涉及解決廣泛且複雜的問題。這樣的問題常常需要耗費大量時間來尋找解決方法。
            例如，我在建立這份履歷時遇到的問題。最初，我計劃使用Heroku建立靜態網站，但由於Heroku停止了免費服務，我需要尋找其他的託管服務。
            我嘗試使用GitHub
            Pages，但也遇到了新的問題。儘管我多次嘗試使用gh-pages來建立，GitHub
            Pages仍無法正常顯示我的內容，並且沒有顯示任何錯誤訊息。
            <br />
            <br />
            在面對這個問題時，我根據可能的解決方案和參考網上的討論做了多次調整和嘗試，但問題未能解決。最終，我採取了重新建立一個新的React
            App的方法，
            並將原有的內容逐步複製到新的App中。我從中找到了問題所在，原來是在使用BrowserRouter放置Routes時出現了問題，而GitHub
            Pages並不支援單頁應用（SPA）的路由設定。
            <br />
            <br />
            這次經驗對我來說是一個全新的挑戰，但受限於託管網站的限制，最終我選擇使用Render來托管我的履歷和作品，
            並證實是可行的。從這次經歷中，我學會了在面對困難時靈活轉變思維，尋找替代方案。
            若當時能有人一起討論這個問題，或許能更早地找到解決方案，節省了大量的時間和精力。
            也讓我深刻認識到合作和共享想法的重要性。
          </p>
        </div>
      </div>
      <div className="container-lg" style={{ paddingTop: "2rem" }}>
        <h1 data-aos="zoom-in" className="Atitle">
          我人生的價值觀
        </h1>
        <div data-aos="fade-right" className="container-lg">
          <h2>重視理性溝通</h2>
          <p className="container-lg">
            之前擔任品檢組長的經驗中，我身為團隊的組長，帶領的組別所負責的產品良率是所有組中最高的，
            我們與其他小組不同的地方在於溝通方式上。因為我提倡不管是新進成員還是老手，每個人在開會時都能自由地提出自己的觀點。
            討論彼此在產品或者產線上看到的任何問題。透過這樣的溝通，我們更能深入地理解彼此，一起思考如何優化。即使某些意見可能並不是最好的，
            但始終保持開放的態度去聆聽別人的看法。我認為這正是我們相對其他團隊更出色的原因。
            對我而言，這樣的觀念對我來說非常重要，我認為不論在哪個行業，理性溝通的方式都是最理想的！
          </p>
        </div>
        <div data-aos="fade-right" className="container-lg">
          <h2>保持持續學習</h2>
          <p className="container-lg">
            目前能初步架設一個基礎的全端網站，但我認為還是有許多不足的之處，所以在完成個人網站後我打算著手學習離散數學與演算法，
            學會推導邏輯與驗證程式碼邏輯正確性，未來也打算繼續學習更多能為後端職涯發展提供幫助的相關知識！
          </p>
        </div>
        <div data-aos="fade-right" className="container-lg">
          <h2>兼具創新思維</h2>
          <p className="container-lg">
            我認為程式設計是一個有無限可能性的東西，所以不該陷入慣性思維，以我學習線上課程時為例，做過的專案當中，
            我事後都會重新思考嘗試以自己的想法，去寫出功能性與老師相同，甚至更好的程式碼。
          </p>
        </div>
      </div>
      <div className="container-lg" style={{ paddingTop: "2rem" }}>
        <h1 data-aos="zoom-in" className="Atitle">
          最後感謝...
        </h1>
        <div data-aos="fade-right" className="container-lg">
          <p>
            最後我衷心的感謝您耐心閱讀完我的網站。
            因此，我希望透過這個網站，盡量將我想傳達的內容和我的心路歷程呈現出來。
            表達我對於這段旅程的誠意與決心。再次由衷地感謝您的閱讀與關注！
            <br />
            <br />
            "我夢想要成為一位工程師，且正走在成為一位工程師的路上。"
            <br />
            --"不要僅僅活在夢想中，踏出那一步，讓夢想成真。" – 布雷特·艾略特
          </p>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default ResumeComponent;
