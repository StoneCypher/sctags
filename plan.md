# ScTags Plan

| Symbol              | Meaning                             |
|:-------------------:|-------------------------------------|
| :100:               | Done, considered final              |
| :large_blue_circle: | Done, works                         |
| :clock2:            | Underway                            |
| :x:                 | Not implemented yet                 |
| :soon:              | Next on the list                    |
| :eyeglasses:        | In review                           |
| :paperclip:         | Review came back w/ notes           |
| :game_die:          | Waiting on tests                    |
| :lemon:             | Failed tests                        |
| :pencil:            | Done, needs docs                    |
| :honeybee:          | Done, buggy                         |
| :tropical_fish:     | Done, but fishy: insufficient tests |

Any emoji used other than :100:, :x:, :clock2:, :soon:, :eyeglasses:, :paperclip:, :game_die:, :lemon:, :large_blue_circle:, :pencil:, :honeybee:, :tropical_fish: requires explanation



## New Tags

### Containers
 - :clock2: `<sc-hbox>`
 - :clock2: `<sc-vbox>`
 - :x: `<sc-heirarchy>`
 - :x: `<sc-vcenter>`
 - :x: `<sc-orient>`
 - :shit: :tropical_fish: `<topbar>` Need to add a "cuts" directive so they won't overlap
 - :shit: :tropical_fish: `<bottombar>` like `<bottombar topcut="topbarid">` or whatever
 - :shit: :tropical_fish: `<leftbar>`
 - :shit: :tropical_fish: `<rightbar>` (this status is shitfish)

### Worrydream-style Live Docs

### UI
 - :large_blue_circle: `<sc-helloworld>`
 - :x: `<sc-sprite>`
   - :x: `<sc-asprite>`
 - :large_blue_circle: `<sc-autoradio>`
 - :clock2: `<sc-topprogressline>` like nprogress
 - :x: `<sc-topprogressspinner>` like nprogress
 - :clock2: `<sc-topbars>`
 - :clock2: `<sc-bottombar>`
 - :x: `<sc-tabbar>`
 - :x: `<sc-sorttable>`
 - :clock2: `<sc-breadcrumb>`
 - :soon: :clock2: `<sc-iconic>` I'm prioritizing this because I met the iconic guy
 - :x: `<sc-toolbar>`
 - :x: `<sc-spinner>`
 - :x: `<sc-clock>`

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
 - :x: `<sc-inkfilepicker>`
 - :x: `<sc-masonryjs>`
 - :x: `<sc-dropzonejs>`
 - :x: `<sc-googlemap>`
 - :large_blue_circle: :watch: `<sc-youtube>` More properties supported soon
   - :large_blue_circle: `<brolsma>`
     - :large_blue_circle: `<numanuma>`
   - :large_blue_circle: `<rickroll>`
   - :large_blue_circle: `<mcroll>`
   - :honeybee: `<leekspin>`
   - :large_blue_circle: `<gangnam>`
   - :large_blue_circle: `<trololo>`
   - :honeybee: `<badgerbadger>`
 - :x: `<sc-vimeo>`
   - :x: `<kiglouder>`
 - :x: `<sc-soundcloud>`
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
 - :large_blue_circle: `<sc-chessboard>`
   - :large_blue_circle: `<sc-chesspiece>`
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
 - :x: `<sc-maze>`
   - :x: `<sc-hexmaze>`
 - :x: `<sc-magic7ball>`
 - :x: `<sc-fortunecookie>`

### Util
 - :soon: `<sc-markdown>`
 - :x: `<sc-highlight>` various
 - :x: `<sc-codemirror>`
 - :x: `<sc-randomfrom>`
 - :x: `<sc-randomsample>`

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
 - :fire: `<sc-localJson>` so broken



## Support for Removed Tags
 - :clock2: `<blink>`
 - :x: `<marquee>`
 - :x: `<dir>`
 - :x: `<menu>`
