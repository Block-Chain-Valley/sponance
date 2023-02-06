import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

import phone from "../assets/image/phone.png";
import roadMap_desktop from "../assets/image/roadmap_desktop.png";
import elip from "../assets/image/elipseAbout.png";
import graph from "../assets/image/graph.png";
import icon1 from "../assets/image/icon1.png";
import icon2 from "../assets/image/icon2.png";
import icon3 from "../assets/image/icon3.png";
import icon4 from "../assets/image/icon4.png";
import icon5 from "../assets/image/icon5.png";
import customer from "../assets/image/customer.png";
import facebook from "../assets/image/icon_facebook.png";
import twitter from "../assets/image/icon_twitter.png";
import member1 from "../assets/image/member1.png";
import member2 from "../assets/image/member2.png";
import member3 from "../assets/image/member3.png";
import member4 from "../assets/image/member4.png";
import member5 from "../assets/image/member5.jpeg";
import member6 from "../assets/image/member6.jpeg";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 1110 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <div className={styles.firstContainer}>
        <div className={styles.firstConTxtBox}>
          <div className={styles.firConTitle}>
            SPONANCE <br />
            재능과 꿈에 <br />
            투자할 수 있는 곳
          </div>
          <div className={styles.fristConText}>
            스포츠 선수에게 지원하고 투자하여 성공을 공유하세요 SPONANCE를 통해
            좋아하는 선수와 팀을 후원하고 토큰을 구매하고 판매하며 성공을 함께
            하세요!
          </div>
          <Link className={styles.gofunding} to="../campaign">
            펀딩하기
          </Link>
        </div>
        <div className={styles.imgBox}>
          <img className={styles.phoneImg} src={phone} alt="phone" />
        </div>
      </div>

      <div className={styles.secondContainer}>
        <div className={styles.forBackgroudContainer}>
          <div className={styles.secondConBox}>
            <div className={styles.secondConTextBox}>
              <img
                className={styles.secondConSymbole}
                src={elip}
                alt="symbol"
              />
              <div className={styles.secondConTitle}>우리의 비전</div>
            </div>
            <li className={styles.secondConText}>
              스포츠 유망주의 성장과 스포츠 스타의 탄생은 가장 매력적인 현상 중
              하나입니다. 
            </li>
            <li className={styles.secondConText}>
              우리는 이 매력적인 현상을 지원하고 투자할 수 있도록 거래 가능한
              자산으로 만들어 팬들이 그들의 지지를 스타의 도전과 성장의 일부로서
              직접적으로 경험할 수 있도록 하는 것을 목표로 합니다.{" "}
            </li>
          </div>

          <div className={styles.secondConBox}>
            <div className={styles.secondConTextBox}>
              <img
                className={styles.secondConSymbole}
                src={elip}
                alt="symbol"
              />
              <div className={styles.secondConTitle}>우리의 미션</div>
            </div>
            <li className={styles.secondConText}>
              SPONANCE는 주로 성장과 성공을 꿈꾸고 있는, 긍정적 사회 영향력에
              대한 가능성이 있는 운동선수나 팀을 대상으로 합니다. SPONANCE는
              플랫폼에서 재능은 개인의 이력과 다양한 보상을 권리화 하여 
              거래가능한 자산이 됩니다
            </li>
            <li className={styles.secondConText}>
              우리는 재능있는 사람들이 커뮤니티의 가치를 창출할 수 있도록
              도와주고 팬들도 선수에 대한 투자가 가능해질 수 있도록 서비스를
              구축합니다. 팬들은 투자를 통해 스포츠 스타의 미래의 성공과 성장에
              대한 지분을 소유할 수 있습니다. 
            </li>
            <li className={styles.secondConText}>
              SPONANCE는 사용자가 인재라는 완전히 새로운 개념의 자산을 소유할 수
              있도록 포괄적인 인프라를 제공합니다. 
            </li>
          </div>

          <div className={styles.secondConBox}>
            <div className={styles.secondConTextBox}>
              <img
                className={styles.secondConSymbole}
                src={elip}
                alt="symbol"
              />
              <div className={styles.secondConTitle}>우리의 가능성</div>
            </div>
            <li className={styles.secondConText}>
              우리가 제2의 손흥민에게 미리 투자할 수 있다고 상상해보세요!
            </li>
            <li className={styles.secondConText}>
              전세계의 대부분의 모든 재능있는 선수들은 수많은 경쟁자들 사이에서
              살아남고 성공하기 위해서 최선을 다합니다. 하지만 그들은 스타가
              되기 전까지 거의 수입이 없습니다. 
            </li>
            <li className={styles.secondConText}>
              또한 팬들은 좋아하는 선수를 응원하는 마음과 선수의 성공을 지원하고
              싶은 욕구를 가지고 있지만 그들을 직접적으로 지원하고, 그들의
              성과를 함께 누릴 수 있는 인프라가 부재합니다.
            </li>
          </div>
        </div>
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.forBackgroudContainer}>
          <img className={styles.graphimg} src={graph} alt="graph" />
          <div className={styles.thirdTextBox}>
            <div className={styles.thirdTBTitle}>
              왜 SPONANCE를 통해 후원해야하나요?
            </div>
            <div className={styles.thirdTBText}>
              일부 토큰은 한정판 입니다. 수요가 증가했을 때 가치 상승을 기대하기
              위해 관심받지 못하고 가치가 낮을 때 구입하여 미래의 가치 증대를
              수익화할 수 있습니다.
              <br />
              <br />
              미래 수입의 공유, 특별한 경기의 티켓, 개인화된 헌정 유니폼 등
              SPONANCE를 통해 후원받은 선수들은 그들의 가장 충실하고 소중한
              팬들을 위해 독점적인 특전을 제공할 것을 약속합니다. 이를 통해
              팬들은 그동안 경험하지 못한 가치활동을 경험하게 될 것입니다.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.forthContainer}>
        <div className={styles.forthConTitleBox}>
          <div className={styles.forthTitle}>고객을 위한 맞춤형 기능</div>
          <div className={styles.forthText}>
            스포낸스는 스포츠 관련 목표를 가진 팀, 개인 및 조직에 NFT 등의
            우수한
            <br />
            크라우드펀딩 도구와 커뮤니티 관리 도구를 제공합니다.
          </div>
        </div>
        <div className={styles.forthContentsContainer}>
          <div className={styles.forthContentsBox}>
            <img
              className={styles.forthContentsSymbol}
              src={icon1}
              alt="icon"
            />
            <div className={styles.forthContentsTxt}>
              선수와 매니지먼트 조직은 <br />
              여러 프로젝트를 쉽게 만들고 <br />
              동시에 관리할 수 있습니다.
            </div>
          </div>
          <div className={styles.forthContentsBox}>
            <img
              className={styles.forthContentsSymbol}
              src={icon2}
              alt="icon"
            />
            <div className={styles.forthContentsTxt}>
              다양한 방식의 권리 계약 툴과 <br />
              투자 상품 설계를 제공하여 새로운 <br />
              시도에 대한 쉬운 접근이 가능해집니다.
            </div>
          </div>
          <div className={styles.forthContentsBox}>
            <img
              className={styles.forthContentsSymbol}
              src={icon3}
              alt="icon"
            />
            <div className={styles.forthContentsTxt}>
              다양한 방식의 권리 계약 툴과 <br />
              투자 상품 설계를 제공하여 새로운 <br />
              시도에 대한 쉬운 접근이 가능해집니다.
            </div>
          </div>
          <div className={styles.forthContentsBox}>
            <img
              className={styles.forthContentsSymbol}
              src={icon4}
              alt="icon"
            />
            <div className={styles.forthContentsTxt}>
              다양한 보상 템플릿을 활용해 지지자들과 <br />
              관계를 형성하고 그들에게 감사를 표시할 수 있는 <br />
              좋은 방법을 제안합니다. 자신만의 것을 만드는 경우 <br />
              빠르고 직접적인 지원을 통해 서비스를 구축합니다.
            </div>
          </div>
          <div className={styles.forthContentsBox}>
            <img
              className={styles.forthContentsSymbol}
              src={icon5}
              alt="icon"
            />
            <div className={styles.forthContentsTxt}>
              대시보드에서 후원 및 투자자 데이터에 <br />
              쉽게 접근하여 연락하고 달성 되어야
              <br />할 보상을 추적하고 지원합니다.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fifthContainer}>
        <img className={styles.customer} src={customer} alt="customer" />
      </div>

      <div className={styles.sixthContainer}>
        <img className={styles.roadmap} src={roadMap_desktop} alt="loadmap" />
      </div>

      <div className={styles.sevenContainer}>
        <div className={styles.sevenConTitle}>Our Team</div>
        <div className={styles.memberBoxContainer}>
          <div className={styles.memberBox}>
            <img className={styles.profileimg} src={member3} alt="member" />
            <div className={styles.name}>Yunjae Nam</div>
            <div className={styles.memberBoxSubCon}>
              <div className={styles.postion}>CEO</div>
              <div className={styles.logoCon}>
                <img className={styles.snsLogo} src={facebook} />
                <img className={styles.snsLogo} src={twitter} />
              </div>
            </div>
          </div>
          <div className={styles.memberBox}>
            <img className={styles.profileimg} src={member6} alt="member" />
            <div className={styles.name}>Jinsung Park</div>
            <div className={styles.memberBoxSubCon}>
              <div className={styles.postion}>Lead Developer</div>
              <div className={styles.logoCon}>
                <img className={styles.snsLogo} src={facebook} />
                <img className={styles.snsLogo} src={twitter} />
              </div>
            </div>
          </div>
          <div className={styles.memberBox}>
            <img className={styles.profileimg} src={member4} alt="member" />
            <div className={styles.name}>Nakjun Lee</div>
            <div className={styles.memberBoxSubCon}>
              <div className={styles.postion}>Blockchain Develper</div>
              <div className={styles.logoCon}>
                <img className={styles.snsLogo} src={facebook} />
                <img className={styles.snsLogo} src={twitter} />
              </div>
            </div>
          </div>
          <div className={styles.memberBox}>
            <img className={styles.profileimg} src={member1} alt="member" />
            <div className={styles.name}>Dahye Um</div>
            <div className={styles.memberBoxSubCon}>
              <div className={styles.postion}>Designer</div>
              <div className={styles.logoCon}>
                <img className={styles.snsLogo} src={facebook} />
                <img className={styles.snsLogo} src={twitter} />
              </div>
            </div>
          </div>
          <div className={styles.memberBox}>
            <img className={styles.profileimg} src={member2} alt="member" />
            <div className={styles.name}>Gukil Han</div>
            <div className={styles.memberBoxSubCon}>
              <div className={styles.postion}>Community Manager</div>
              <div className={styles.logoCon}>
                <img className={styles.snsLogo} src={facebook} />
                <img className={styles.snsLogo} src={twitter} />
              </div>
            </div>
          </div>
          <div className={styles.memberBox}>
            <img className={styles.profileimg} src={member5} alt="member" />
            <div className={styles.name}>Hansung Kim</div>
            <div className={styles.memberBoxSubCon}>
              <div className={styles.postion}>Athletics Management</div>
              <div className={styles.logoCon}>
                <img className={styles.snsLogo} src={facebook} />
                <img className={styles.snsLogo} src={twitter} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
