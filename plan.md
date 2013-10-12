# ScTags Plan

| Symbol             | Meaning                             |
|:------------------:|-------------------------------------|
| :100:              | Done, considered final              |
| :white_check_mark: | Done, works                         |
| :clock2:           | Underway                            |
| :x:                | Not implemented yet                 |
| :soon:             | Next on the list                    |
| :eyeglasses:       | In review                           |
| :paperclip:        | Review came back w/ notes           |
| :game_die:         | Waiting on tests                    |
| :lemon:            | Failed tests                        |
| :pencil:           | Done, needs docs                    |
| :honeybee:         | Done, buggy                         |
| :tropical_fish:    | Done, but fishy: insufficient tests |

Any emoji used other than :100:, :x:, :clock2:, :soon:, :eyeglasses:, :paperclip:, :game_die:, :lemon:, :white_check_mark:, :pencil:, :honeybee:, :tropical_fish: requires explanation



## Support for Removed Tags
 - :clock2: `<blink>`
 - :x: `<marquee>`



## New Tags

### Containers
 - :clock2: `<sc-hbox>`
 - :clock2: `<sc-vbox>`
 - :x: `<sc-heirarchy>`
 - :x: `<sc-vcenter>`
 - :x: `<sc-orient>`

### Worrydream-style Live Docs

### UI
 - :white_check_mark: `<sc-helloworld>`
 - :x: `<sc-sprite>`
   - :x: `<sc-asprite>`
 - :white_check_mark: `<sc-autoradio>`
 - :clock2: `<sc-topprogressline>` like nprogress
 - :clock2: `<sc-topbars>`
 - :clock2: `<sc-bottombar>`
 - :x: `<sc-tabbar>`
 - :x: `<sc-sorttable>`

### i18n
 - :scream: `<sc-i18n>` very doubleplus bad impl, better coming soon
   - :x: `<sc-i18n-number>`
   - :x: `<sc-i18n-price>`
   - :x: `<sc-i18n-datetime>`
     - :x: `<sc-i18n-time>`
     - :x: `<sc-i18n-date>`
   - :x: `<sc-i18n-quote>`
   - :x: `<sc-i18n-phone>`

### Embeds
 - :shit: `<sc-youtube>` Terrible impl, better coming soon
   - :x: `<brolsma>`
   - :x: `<rickroll>`
 - :x: `<sc-vimeo>`
   - :x: `<kiglouder>`
 - :x: `<sc-facebook>`
   - :x: `<sc-facebookpost>`
 - :x: `<sc-twitter>`
   - :x: `<sc-twitterpost>`
 - (other social networks a-plenty)
 - :x: `<sc-crowdtilt>`

### Network
 - :honeybee: `<sc-bridge>`
 - :x: `<sc-livechat>`
 - :x: `<sc-irc>`
 - :clock2: `<sc-ajaxqueue>`
   - :soon: `<sc-cometqueue>`

### Graphs
 - :soon: `<sc-d3>` various
   - :x: `<sc-d3base>`
   - :soon: `<sc-spark>` sparkline
   - :x: `<sc-calendar>`
     - :x: `<sc-piecalendar>`
   - :soon: `<sc-pie>`
     - :x: `<sc-donut>`
     - :soon: `<sc-progressdonut>`
   - :x: `<sc-bar>`
     - :x: `<sc-stackedbar>`
   - :x: `<sc-area>`
   - :x: `<sc-radar>`
   - :x: `<sc-map>`
     - :x: `<sc-chloropleth>`
   - :x: `<sc-hloc>`
   - :x: `<sc-forcegraph>`
   - :x: `<sc-chord>`
   - :x: `<sc-dendrogram>`
   - :x: `<sc-nodelinktree>`
   - :x: `<sc-sunburst>`
   - :x: `<sc-treemap>`
   - :x: `<sc-sunburst>`
   - :x: `<sc-parallelcoord>`
   - :x: `<sc-slopegraph>`
   - :x: `<sc-cubism>`
   - :x: `<sc-scatterplot>`
     - :x: `<sc-scatterplotmatrix>`
   - :x: `<sc-voronoi>`
   - :x: `<sc-sankey>`
   - :x: `<sc-cooccurrencematrix>`
   - :x: `<sc-bullet>` and `<sc-vbullet>`
   * Not sure what to call http://neuralengr.com/asifr/journals/
   * Not sure what to call http://bibviz.com/

### Game
 - :x: `<sc-card>` w/ 3d css flip
   - :x: `<sc-deck>`
   - :rage2: `<sc->` TODO can't remember the name, the space on the board where cards are expected to be played, like the 4+4 at the top left and right respectively of freecell
 - :white_check_mark: `<sc-chessboard>`
   - :white_check_mark: `<sc-chesspiece>`
 - :x: `<sc-goboard>`
   - :x: `<sc-gopiece>`
 - :x: `<sc-shogiboard>`
   - :x: `<sc-shogipiece>`
 - :clock2: `<sc-board>`
   - :x: `<sc-squareboard>`
   - :x: `<sc-isoboard>`
   - :clock2: `<sc-hexboard>`
   - :x: `<sc-triangleboard>`
 - :x: `<sc-minesweeper>`
 - :x: `<sc-trophycase>`

### Util
 - :soon: `<sc-markdown>`
 - :x: `<sc-highlight>` various
 - :x: `<sc-codemirror>`

### Platform

#### Agnostic Wrappers
 - :x: `<sc-platf-store>`
 - :x: `<sc-platf-appbar>`

#### Win8
 - :x: `<sc-win8>` various
   - :x: `<sc-win8-store>`
   - :x: `<sc-win8-appbar>`
   - :x: `<sc-win8-charmbar>`
   - :x: `<sc-win8-file>`

#### Win8 Phone
 - :x: `<sc-win8p>` various
   - :x: `<sc-win8p-store>`
   - :x: `<sc-win8p-appbar>`

#### iOS
 - :x: `<sc-ios>` various
   - :x: `<sc-ios-store>`
   - :x: `<sc-ios-appbar>`

### Non-visual
 - :soon: `<sc-googleanalytics>`
