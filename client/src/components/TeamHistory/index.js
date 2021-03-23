import React from "react";
import { withRouter } from "react-router-dom";
import "./teamHistory.css";

import Banner from "../Banner";
import TopNav from "../TopNav"

class TeamHistory extends React.Component{
  render(){
    return(
      <div className="tHardwood">
        <div className="tBackGold">
          <div className="tBannerBox">
              <Banner />
          </div>
          <TopNav />
          <div className="tTextArea">
            <div className="tSection">
              <div className="tTextBox">
                <div className="tHeader">Championships &#65120; Other Titles</div>
                <div>The Lakers have won 17 Championships, 32 Conference Titles, and 24 Division Titles.  They are tied for the most NBA Championships with the Boston Celtics who both have 17. Prior to the recent 2020 Lakers Championship led by Lebron James and Anthony Davis. The prior Lakers Championship was in 2010 against the Celtics, led by Kobe Bryant and Pau Gasol.</div>
              </div>
            </div>
            <div className="tSection">
              <div className="tTextBox">
                <div className="tHeader">Hall of Famers</div>
                <div className="tMinorHeader">Players</div>
                <div>George Mikan #99, Elgin Baylor #59, Jim Pollard #17, Wilt Chamberlain #13, Jerry West #44, Slater Martin #22, Clyde Lovellette #34, Connie Hawkins #42, Vern Mikkelsen #19, Kareem Abdul-Jabbar #33, Gail Goodrich #25, Bob McAdoo #11, Magic Johnson #32, James Worthy #42, Adrian Dantley #4, Karl Malone #11, Dennis Rodman #73, Jamaal Wilkes #52, Gary Payton #20, Mitch Richmond #23, Spencer Haywood #31, Zelmo Beaty #31, Shaquille O'Neal #34, Charlie Scott #11, Steve Nash #10, Vlade Divac #12</div>
                <br />
                <div className="tMinorHeader">Coaches</div>
                <div>John Kundla, Bill Sharman, Phil Jackson, Pat Riley, Tex Winter</div>
                <br />
                <div className="tMinorHeader">Other Contributors</div>
                <div>Chick Hearn (Broadcaster), Jerry Buss (Owner), Pete Newell (General Manager)</div>
              </div>
            </div>
            <div className="tSection">
              <div className="tTextBox">
                <div className="tHeader">Background</div>
                <div>The Lakers were created in 1947 by Ben Berger and Morris Chalfen in Minneapolis for $15000 ($175,000 in 2020 value). Minnesota is the "Land of 10,000 Lakes" and that inspired the name "Lakers".</div>
                <br />
                <div>After joining the NBA from the NBL(National Basketball League) in 1948, they won the championship the next 5 out of 6 years let by George Mikan. The Lakers struggled financially in the late 1950s resulting in the team relocating to Los Angeles where they reside today.</div>
                <br />
                <div>The 1960s were led Elgin Baylor and Jerry West. They faced the Boston Celtics 6 times in the Finals and lost each time. This was the beginning of the Lakers-Celtics Rivalry. In 1968, they acquired Wilt Chamberlain who eventually led them to another championship in 1972. The Lakers hold the longest winning streak of 33 games set in the 1971-1972 season.</div>
                <br />
                <div>In the 1970s, they acquired Kareem Abdul-Jabbar. He won multiple NBA MVPs but they were not able to make the Finals during this time. But it does show the Lakers' ability to acquire star players as a foundation for a championship team.</div>
                <br />
                <div>The 1980s was the "Showtime" Lakers led by Magic Johnson, James Worthy, and Kareem. All 3 would become Hall of Famers. They were coached by Hall of Famer Pat Riley. They won 5 championships in 9 years.</div>
                <br />
                <div>The 1990s started off slow not much of an impact.  It was not until 1996 when they acquired Shaquille O'Neal and Kobe Bryant, where title contention was a posibility.</div>
                <br />
                <div>Entering the 2000s is when they hired Hall of Fame Coach, Phil Jackson. With Shaq and Kobe, they won't the titles from 2000-2002 ("three-peat"). They would not win another title until 2009 and 2010. They were led by Kobe Bryant and Pau Gasol.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TeamHistory);