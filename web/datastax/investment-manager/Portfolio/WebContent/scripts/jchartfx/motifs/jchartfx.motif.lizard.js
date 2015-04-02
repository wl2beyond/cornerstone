(function(){var e=window.cfx,a=window.sfx;e.motif="lizard";var g=a["gauge.templates"];if(void 0!=g){g.lizardDashBorder='<T><T.R><s K="plotMargin">targetChart</s></T.R><C><B F="{B F}"/><g><g.RD><RD H="Auto" MinHeight="32"/><RD H="*"/></g.RD><B F="#33222222"><TextBlock M="8,0" Text="{B Title}" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardTitle.fill}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="9" FontWeight="Bold"/></B><B g.R="1" F="{B F}"><C N="targetChart" M="8,16,8,8"/></B></g></C></T>';
g.lizardRadialDashBorder="<T/>";g.lizardRadialIndicator="NeedleRegularDrop";g.lizardRadialCap='<T><E S="#F19024" ST="2" F="{N}"/></T>';g.lizardRadialGlare="<T/>";g.lizardLinearDashBorder="<T/>";g.lizardLinearGlare="<T/>";g.lizardLinearFiller="LinearFillerSimple";g.lizardRadialBar='<T><C M="0"><P D="{B G}" F="{B F}"/><P D="{B GeometryOutside}" S="#66000000"/><P D="{B GeometryInside}" S="#22FFFFFF"/><P D="{B GeometryStart}" S="#22FFFFFF"/><P D="{B GeometryEnd}" S="#22FFFFFF"/></C></T>';g.lizardLinearBar=
'<T><C M="0"><B F="{B F}" S="{N}" CR="2"/><B F="{N}" ST="1" S="#66000000" StartCorner="3" Segments="2" CR="2"/><B F="{N}" ST="1" S="#22DDDDDD" StartCorner="1" Segments="2" CR="2"/></C></T>';var l=new e.gauge.Palette;l.setColors(["#2A2A2A","#2A2A2A","#2A2A2A","#2A2A2A","#707275","#707275","#707275","#707275","#606060",null,"#D3D4D4","#1A1C1D","#101010",null,"#AF432D","#A1412D",null,"#B6722D","#A86A2C",null,"#76AB05","#6E9E08",null,"#D3D4D4","#D3D4D4","#D3D4D4","#D3D4D4","#808080","#D3D4D4","#AF432D",
"#B6722D","#76AB05","#333333","#FFFFFF","#333333"]);e.gauge.Palette.setDefaultPalette(l)}a=a["vector.templates"];void 0!=a&&(a["DashboardTitle.fill"]="0,#8B8B8B",a["DashboardTitle.font-family"]="1,Helvetica, Arial, sans-serif",a["AxisY_Text.fill"]="0,#606060",a["Border.fill"]="0,#2A2A2A",a.lizardBorder='<T><T.R><s K="plotMargin">targetChart</s><Th K="externalMargin">16</Th><Th K="internalRectMargin">2</Th><T K="internalRect"><B CR="6" F="{B F}" S="{B S}" CP="0.5"/></T><T K="internal"><Line S="{B S}" X1="{B X1}" X2="{B X2}" Y1="{B Y1}" Y2="{B Y2}"/></T></T.R><C><B F="{B F}"/><g><g.RD><RD H="Auto" MinHeight="32"/><RD H="*"/></g.RD><B F="#33222222"><TextBlock M="8,0" Text="{B Title}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="9" FontWeight="Bold" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardTitle.fill}"/></B><B g.R="1" F="{N}"><C N="targetChart" M="8"/></B></g></C></T>',
a.lizardBar="BarBasic",a.lizardGantt="GanttBasic",a.lizardEqualizer='<T><B F="{B F}"/></T>',a.lizardArea="AreaBasic",a.lizardCurveArea="CurveAreaBasic",a.lizardLine="LineBasic",a.lizardCurve="CurveBasic",a.lizardPie='<T><T.R><T K="cfxRay"><Line X1="{B X1}" Y1="{B Y1}" X2="{B X2}" Y2="{B Y2}" S="{Binding Class=Border.fill}" ST="2"/></T></T.R><P D="{B G}" F="{B F}" S="{B S}"/></T>',a.lizardDoughnut=a.lizardPie,a.lizardBubble="BubbleBasic",a.lizardTreeMap='<T><C M="1"><B F="{B F}" S="{B S}"/></C></T>',
a.lizardFunnel='<T><Po P="{B P}" F="{B F}" S="{B S}"/></T>',a.lizardPyramid=a.lizardFunnel,a.lizardSparklineLine=a.lizardLine,a.lizardSparklineBar=a.lizardBar,a.lizardSparklineArea=a.lizardArea,a.lizardMarker1='<T><C><r F="{B F}"/><r S="{Binding Class=Border.fill}" ST="2"/></C></T>',a.lizardMarker2='<T><C><E F="{B F}"/><E S="{Binding Class=Border.fill}" ST="2"/></C></T>',a.lizardMarker3='<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M12,1L24,22L0,22L12,1" F="{B F}"/><P D="M12,1L24,22L0,22L12,1" S="{Binding Class=Border.fill}" ST="3"/></C></V></T>',
a.lizardMarker4='<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M24,12L18,18L12,24L6,18L0,12L6,6L12,0L18,6L24,12" F="{B F}"/><P D="M24,12L18,18L12,24L6,18L0,12L6,6L12,0L18,6L24,12" S="{Binding Class=Border.fill}" ST="3"/></C></V></T>',a.lizardMarker5='<T><C><E F="{B F}"/><E S="{Binding Class=Border.fill}" ST="2"/><E><E.F><R><G C="#55FFFFFF" O="0"/><G C="#55333333" O="1"/></R></E.F></E></C></T>',a.lizardMarker6='<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M24,9L0,9L0,15L24,15L24,9" F="{B F}"/><P D="M24,9L0,9L0,15L24,15L24,9" S="{Binding Class=Border.fill}" ST="2"/></C></V></T>',
a.lizardMarker7='<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M15,24L15,0L9,0L9,24L15,24" F="{B F}"/><P D="M15,24L15,0L9,0L9,24L15,24" S="{Binding Class=Border.fill}" ST="2"/></C></V></T>',a.lizardMarker8='<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M24,9L15,9L15,0L9,0L9,9L0,9L0,15L9,15L9,24L15,24L15,15L24,15L24,9" F="{B F}"/><P D="M24,9L15,9L15,0L9,0L9,9L0,9L0,15L9,15L9,24L15,24L15,15L24,15L24,9" S="{Binding Class=Border.fill}" ST="2"/></C></V></T>',a.lizardMarker9=
'<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M12,24L24,0L0,0L12,24" F="{B F}"/><P D="M12,24L24,0L0,0L12,24" S="{Binding Class=Border.fill}" ST="3"/></C></V></T>',a.lizardMarker10='<T><T.R><D K="cfxOSW">1</D></T.R><V VW="25" VH="25"><C><P D="M20.485,17.657L14.828,12l5.657-5.657c0.781-0.781,0.781-2.047,0-2.829c-0.781-0.781-2.048-0.781-2.828,0L12,9.172L6.343,3.515c-0.78-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.048,0,2.829L9.172,12l-5.657,5.657c-0.781,0.78-0.781,2.047,0,2.828s2.048,0.781,2.828,0L12,14.828l5.656,5.657c0.781,0.781,2.048,0.781,2.829,0C21.266,19.704,21.267,18.438,20.485,17.657z" F="{B F}"/><P D="M20.485,17.657L14.828,12l5.657-5.657c0.781-0.781,0.781-2.047,0-2.829c-0.781-0.781-2.048-0.781-2.828,0L12,9.172L6.343,3.515c-0.78-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.048,0,2.829L9.172,12l-5.657,5.657c-0.781,0.78-0.781,2.047,0,2.828s2.048,0.781,2.828,0L12,14.828l5.656,5.657c0.781,0.781,2.048,0.781,2.829,0C21.266,19.704,21.267,18.438,20.485,17.657z" S="{Binding Class=Border.fill}" ST="2"/></C></V></T>',
a=new e.Palette,a.setColors("#258DC8 #4EB42E #F15619 #80699B #77AB14 #B5712E #AE432E #B8B300 #0D233A #BD1700 #FF9800 #965994 #910000 #8BBC21 #2F7ED8 #BB7C00 #2A2A2A #F0F0F0 #00000000 #2A2A2A #C0C0C0 #1A1A1A #fc4b35 #ffffff #606060 #606060 #00000000 #6D869F #00000000 #5B5B5B #00000000 #2A2A2A #606060 #1A1A1A #606060 #272727 #8B8B8B #606060 #2A2A2A #333333 #FFFFFF #333333".split(" ")),e.Chart.setDefaultPalette(a));var f=function(){};e.motifs.lizard=f;f.getStyleInfo=function(b){var a="";if(b!==void 0){b=
b[0];b!==void 0&&(a=b[0])}b={isGroup:false};b.name=a;b.isSingle=false;b.isBullet=false;b.sections=[];if(a!=void 0){a=a.toUpperCase();if(a.indexOf("SINGLE")>=0){b.isSingle=true;b.name=""}if(a.indexOf("GROUP")>=0){b.isGroup=true;b.name="";b.name=""}if(a.indexOf("BULLET")>=0){b.isBullet=true;b.name=""}if(a.indexOf("SECTIONS")>=0){var c,d;c=a.indexOf("SECTIONS");d=a.indexOf(":",c);if(d>0){c=d;d=a.indexOf("-",c);a=d>=0?a.substring(c+1,d):a.substring(c+1,a.length);b.sections=a.split(",",100)}b.name=""}}return b};
f.global=function(b){b.setFont("8pt Arial");b.getToolTips().setBorderTemplate('<T xmlns:x="a"><T.R><mc K="multConverter"/></T.R><C Padding="12"><B S="{B S}" ST="2" F="{B F}" A="0.85" CP="0.4" CR="8" Padding="4,4,4,0"><DockPanel N="container" Orientation="Vertical"><TextBlock Text="{B Title}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=0.8}" V="{B TitleVisible}" HorizontalAlignment="Right" FontWeight="Bold" M="3,0,3,0"/><B H="1" S="{B Foreground}" ST="1" M="0,0,0,4" V="{B TitleVisible}"/></DockPanel></B></C></T>')};
f.radial=function(b,a){f.global(b);var c=f.getStyleInfo(a);c.name!=null&&b.setStyle(c.name);var d=b.getMainScale();if(c.name=="progress"){d.setThickness(1);d.setPosition(0);d.setStartAngle(180);d.setSweepAngle(180)}else{d.setThickness(1);d.setPosition(0);c=d.getBar();c.setVisible(true);c.setTemplate(g.lizardRadialBar);c.setThickness(0.7);c.setPosition(0.15);d.getCap().setVisible(false);d.setStartAngle(205);d.setSweepAngle(130);c=b.getMainIndicator();c.setSize(0.8);c.setPosition(1);d=d.getTickmarks();
d.getMajor().setVisible(false);d.getMedium().setVisible(false);d=b.getDefaultAttributes();d.setSectionThickness(0.025);d.setSectionPosition(0.05);d=new e.gauge.Title;b.getTitles().add(d);d=new e.gauge.Title;d.setDock(e.gauge.DockArea.Top);d.setText("%v");d.setFont("40pt Arial");d.setTag("TitleLarge");d.setResizeableFont(false);b.getTitles().add(d)}};f.linear=function(b,a){f.global(b);var c=b.getMainScale(),d=c.getBar(),h=b.getMainIndicator();d.setVisible(true);c.setThickness(0.6);c.setAlignment(e.StringAlignment.Near);
var i=c.getTickmarks(),j=i.getMajor();j.setSize(0.1);j.setStyle(e.gauge.TickmarkStyle.Line);j.setWidth(0.025);j.setPosition(0.875);i.getMedium().setVisible(false);d.setTemplate(g.lizardLinearBar);c.setAllowHalves(false);i=f.getStyleInfo(a);if(i.isGroup){b.getBorder().setTemplate("<T/>");b.getDashboardBorder().setTemplate("<T/>")}if(i.isBullet){c.setThickness(0.8);c.setPosition(0);h.setSize(0.25);h.setPosition(0.475);h.setTitle("Current");h=new e.gauge.Marker;h.setSize(0.4);h.setPosition(0.6);h.setTitle("Target");
h.setTemplate("MarkerThinRectangle");c.getIndicators().add(h);b.getDefaultAttributes().setSectionThickness(d.getThickness());b.getDefaultAttributes().setSectionPosition(d.getPosition())}else{c=new e.gauge.Marker;c.setSize(0.5);b.setMainIndicator(c)}if(i.sections.length>0){for(var d=0,k,h=0;h<i.sections.length;h++){k=i.sections[h];c=new e.gauge.ScaleSection;c.setFrom(d);c.setTo(k);b.getMainScale().getSections().add(c);d=k}b.getMainScale().setMax(k)}};f.vert=function(b,a){f.linear(b,a);f.getStyleInfo(a).isBullet||
b.getMainIndicator().setTemplate("MarkerTriangle")};f.horz=function(b,a){f.linear(b,a);if(!f.getStyleInfo(a).isBullet){b.getMainScale().setThickness(0.5);b.getMainIndicator().setTemplate("MarkerTriangleInverted")}};f.chart=function(b,a){var c="";if(a!==void 0){var d=a[0];d!==void 0&&(c=d[0])}b.getAllSeries().setMarkerSize(4);if(c!=void 0){c=c.toUpperCase();c=="GROUP"&&b.getBorder().setTemplate("<T/>")}c=b.getAxisY().getGrids();c.getMajor().setTickMark(e.TickMark.None);c.getMinor().setTickMark(e.TickMark.None);
c=b.getAxisY2().getGrids();c.getMajor().setTickMark(e.TickMark.None);c.getMinor().setTickMark(e.TickMark.None);c=b.getAxisX().getGrids();c.getMinor().setTickMark(e.TickMark.None);c.getMajor().setTickMark(e.TickMark.Outside);c.getMajor().setStyle(c.getMajor().getStyle()|e.AxisStyles.Centered);b.getAllSeries().setMarkerStyle(e.MarkerStyle.Filled);b.getAllSeries().getLine().setWidth(2);b.getAxisY().getGrids().getMajor().setStyle(e.DashStyle.Dot);b.getAxisX().getGrids().getMajor().setStyle(e.DashStyle.Dot);
b.getToolTips().setBorderTemplate('<T xmlns:x="a"><T.R><mc K="multConverter"/></T.R><C Padding="12"><B S="{B ItemFillS}" ST="2" F="{B F}" A="0.85" CP="0.4" CR="8" Padding="4,4,4,0"><DockPanel N="container" Orientation="Vertical"><TextBlock Text="{B Title}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=0.8}" V="{B TitleVisible}" HorizontalAlignment="Right" FontWeight="Bold" M="3,0,3,0"/><B H="1" S="{B Foreground}" ST="1" M="0,0,0,4" V="{B TitleVisible}"/></DockPanel></B></C></T>')};
f.map=function(b){b.setShowAdditionalLayers(false)};f.heatmap=function(b){b=b.getGradientStops();b.getItem(0).setColor("#258DC8");b.getItem(1).setColor("#4EB42E")};f.equalizer=function(b){var a=new e.equalizer.EqualizerItem;a.setColor("#4EB42E");a.setCount(2);b.getTopItems().add(a);a=new e.equalizer.EqualizerItem;a.setColor("#F15619");a.setCount(1);b.getTopItems().add(a);b.setOffColor("#33C0C0C0")};f.trend=function(a,f){a.getSecondaryValues().setAlphaForeground(1);a.getDelta().setVisible(false);a.getSecondaryValues().setSeparatorWidth(0);
var c=a.getIndicator();c.setStyle(e.gauge.IndicatorStyle.TriangleVertical);c.setPosition(e.gauge.IndicatorPosition.Secondary);c="";if(f!==void 0){var d=f[0];d!==void 0&&(c=d[0])}if(c!=void 0){if(c.toUpperCase().indexOf("SINGLE")>=0){a.getDelta().setVisible(false);a.getPercentChange().setVisible(false);a.getIndicator().setVisible(false);a.getIndicator().setPosition(e.gauge.IndicatorPosition.Primary)}c.toUpperCase().indexOf("GROUP")>=0&&a.getBorder().setTemplate("<T/>")}};f.border=function(){}})();