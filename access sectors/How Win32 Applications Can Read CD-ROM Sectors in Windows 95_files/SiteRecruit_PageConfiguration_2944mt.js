﻿if(SiteRecruit_Globals.isEnUs==true){SiteRecruit_Config.frequency=0.0005;}
if(SiteRecruit_Globals.isFR==true){SiteRecruit_Config.frequency=0.0014;}
if(SiteRecruit_Globals.isDE==true){SiteRecruit_Config.frequency=0.0016;}
if(SiteRecruit_Globals.isJA==true){SiteRecruit_Config.frequency=0.00075;}

SiteRecruit_Config.useCookie=false;function SiteRecruit_InvitationConfiguration(){this.weight=0;this.projectId='';this.invitationType=SiteRecruit_Constants.invitationType.standard;this.acceptUrl='';this.viewUrl='';this.acceptParams='';this.viewParams='';this.invitationContent='';this.invitationHeight=0;this.invitationWidth=0;this.revealDelay=0;this.horizontalAlignment=SiteRecruit_Constants.horizontalAlignment.middle;this.verticalAlignment=SiteRecruit_Constants.verticalAlignment.middle;this.horizontalMargin=0;this.verticalMargin=0;this.hideBlockingElements=false;this.autoCentering=true;this.otherCookies=new Array();this.otherVariables=new Array();this.trackerUrl='';}SiteRecruit_Config.invitations=new Array();

if(SiteRecruit_Globals.isEnUs==true)
{
SiteRecruit_Config.invitations[0]=new SiteRecruit_InvitationConfiguration();
SiteRecruit_Config.invitations[0].weight=50;
SiteRecruit_Config.invitations[0].projectId='2944mt1';
SiteRecruit_Config.invitations[0].invitationType=2;
SiteRecruit_Config.invitations[0].acceptUrl='http://web.survey-poll.com/bin/survey.asp';
SiteRecruit_Config.invitations[0].viewUrl='http://web.survey-poll.com/bin/survey.asp';
SiteRecruit_Config.invitations[0].acceptParams='survey=/2900/2944mt&page=2944mtb-page1.xml&mtd=1&log=accept-2944mt1.log&site=06';
SiteRecruit_Config.invitations[0].viewParams='survey=/2900/2944mt&page=2944mtb-page1.xml&mtd=1&log=view-2944mt1.log&site=06';
SiteRecruit_Config.invitations[0].invitationContent='<table width="360" cellpadding="3" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr><td> <table width="100%" cellpadding="1" cellspacing="0" border="0" bgcolor="#999999"><tr><td> <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr valign="top"><td> <img src="/library/svy/logo-stripe.gif" /><a href="Close" onclick="@declineHandler"><img border="0" src="/library/svy/close.gif" /></a><br /> <img src="/library/svy/top-stripe.gif" /> <table width="100%" cellpadding="5"><tr><td>  <!-- Intro text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000;">Microsoft is conducting an online survey to understand use of the Microsoft.com Web site.  We’d like to see which pages you visit today and then have you complete a survey when you leave the Microsoft.com Web site.  Would you like to participate?</div> <br />  <!-- Invite form. --> <div align="center" style="margin-bottom: 15px"> <input type="button" value="  Yes  " onclick="@acceptHandler" />&nbsp;&nbsp; <input type="button" value=" No " onclick="@declineHandler" />  <!-- Register the view. --> <img src="@viewUrlAndParams" width="0" height="0" style="margin: 0; padding: 0;" />  </div>  <!-- Footer text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000; margin-top: 0px;"><a href="http://www.microsoft.com/info/privacy.mspx" target="_blank">Privacy Statement</a></div>  </td></tr></table> <img src="/library/svy/bottom-stripe.gif" /></td></tr></table> </td></tr></table> </td></tr></table>   ';
SiteRecruit_Config.invitations[0].invitationHeight=210;
SiteRecruit_Config.invitations[0].invitationWidth=390;
SiteRecruit_Config.invitations[0].revealDelay=1000;
SiteRecruit_Config.invitations[0].horizontalAlignment=1;
SiteRecruit_Config.invitations[0].verticalAlignment=0;
SiteRecruit_Config.invitations[0].horizontalMargin=0;
SiteRecruit_Config.invitations[0].verticalMargin=0;
SiteRecruit_Config.invitations[0].hideBlockingElements=true;
SiteRecruit_Config.invitations[0].autoCentering=true;
SiteRecruit_Config.invitations[0].trackerUrl='/library/svy/SiteRecruit_Tracker_2944mt1.htm';

SiteRecruit_Config.invitations[1] = new SiteRecruit_InvitationConfiguration();
SiteRecruit_Config.invitations[1].weight = 50;
SiteRecruit_Config.invitations[1].projectId = '3332mt';
SiteRecruit_Config.invitations[1].invitationType = 2;
SiteRecruit_Config.invitations[1].acceptUrl = 'http://survey2.surveysite.com/wix/p12038685.aspx';
SiteRecruit_Config.invitations[1].viewUrl = 'http://web.survey-poll.com/tc/CreateLog.aspx';
SiteRecruit_Config.invitations[1].acceptParams = 'l=9&mth=1&site=90';
SiteRecruit_Config.invitations[1].viewParams = 'log=comscore/view/p12038685-view.log&site=90';
SiteRecruit_Config.invitations[1].invitationContent = '<table width="360" cellpadding="3" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr><td> <table width="100%" cellpadding="1" cellspacing="0" border="0" bgcolor="#999999"><tr><td> <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr valign="top"><td> <img src="/library/svy/logo-stripe.gif" /><a href="Close" onclick="@declineHandler"><img border="0" src="/library/svy/close.gif" /></a><br /> <img src="/library/svy/top-stripe.gif" /> <table width="100%" cellpadding="5"><tr><td>  <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000; margin: 0 0 15px 0;">Microsoft is conducting an online survey to understand use of the Microsoft.com Web site.  We’d like to see which pages you visit today and then have you complete a survey when you leave the Microsoft.com Web site.  Would you like to participate?</div>  <div align="center" style="margin: 0; padding: 0"> <form id="SiteRecruit_invitationForm" onsubmit="@acceptHandler" style="margin: 0; padding: 0"> <input style="margin: 0; padding: 0" type="submit" value="  Yes  " />&nbsp;&nbsp; <input style="margin: 0; padding: 0"  type="button" value=" No " onclick="@declineHandler" /> </form> </div>  <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000; margin: 15px 0 2px 0;"><a href="http://www.microsoft.com/info/privacy.mspx" target="_blank">Privacy Statement</a></div>  </td></tr></table> <img src="/library/svy/bottom-stripe.gif" /></td></tr></table> </td></tr></table> </td></tr></table>   '; 
SiteRecruit_Config.invitations[1].invitationHeight = 210;
SiteRecruit_Config.invitations[1].invitationWidth = 390;
SiteRecruit_Config.invitations[1].revealDelay = 1000;
SiteRecruit_Config.invitations[1].horizontalAlignment = 1;
SiteRecruit_Config.invitations[1].verticalAlignment = 0;
SiteRecruit_Config.invitations[1].horizontalMargin = 0;
SiteRecruit_Config.invitations[1].verticalMargin = 0;
SiteRecruit_Config.invitations[1].hideBlockingElements = true;
SiteRecruit_Config.invitations[1].autoCentering = true;
SiteRecruit_Config.invitations[1].trackerUrl = '/library/svy/SiteRecruit_Tracker_3332mt.htm';
SiteRecruit_Config.invitations[1].useRapidCookie = false;
}
if(SiteRecruit_Globals.isFR==true)
{
SiteRecruit_Config.invitations[0]=new SiteRecruit_InvitationConfiguration();
SiteRecruit_Config.invitations[0].weight=50;
SiteRecruit_Config.invitations[0].projectId='2944mt4';
SiteRecruit_Config.invitations[0].invitationType=2;
SiteRecruit_Config.invitations[0].acceptUrl='http://web.survey-poll.com/bin/survey.asp';
SiteRecruit_Config.invitations[0].viewUrl='http://web.survey-poll.com/bin/survey.asp';
SiteRecruit_Config.invitations[0].acceptParams='survey=/2900/2944mt&page=2944mtb-page4.xml&mtd=1&log=accept-2944mt4.log&site=65';
SiteRecruit_Config.invitations[0].viewParams='survey=/2900/2944mt&page=2944mtb-page4.xml&mtd=1&log=view-2944mt4.log&site=65';
SiteRecruit_Config.invitations[0].invitationContent='<table width="360" cellpadding="3" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr><td> <table width="100%" cellpadding="1" cellspacing="0" border="0" bgcolor="#999999"><tr><td> <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr valign="top"><td> <img src="/library/svy/logo-stripe.gif" /><a href="Close" onclick="@declineHandler"><img border="0" src="/library/svy/close.gif" /></a><br /> <img src="/library/svy/top-stripe.gif" /> <table width="100%" cellpadding="5"><tr><td>  <!-- Intro text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000;">Microsoft mène une étude en ligne pour comprendre comment est utilisé le site Web Microsoft.com.  Nous aimerions savoir quelles pages vous avez consultées aujourd\'hui et vous faire participer à une étude une fois que vous quitterez le site Web Microsoft.com.  Voulez-vous participer à cette étude?</div> <br />  <!-- Invite form. --> <div align="center" style="margin-bottom: 15px"> <input type="button" value="  Oui  " onclick="@acceptHandler" />&nbsp;&nbsp; <input type="button" value=" Non " onclick="@declineHandler" />  <!-- Register the view. --> <img src="@viewUrlAndParams" width="0" height="0" style="margin: 0; padding: 0;" />  </div>  <!-- Footer text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000; margin-top: 0px;"><a href="http://www.microsoft.com/info/fr/privacy.mspx" target="_blank">Déclaration de confidentialité</a></div>  </td></tr></table> <img src="/library/svy/bottom-stripe.gif" /></td></tr></table> </td></tr></table> </td></tr></table>   ';
SiteRecruit_Config.invitations[0].invitationHeight=210;
SiteRecruit_Config.invitations[0].invitationWidth=390;
SiteRecruit_Config.invitations[0].revealDelay=1000;
SiteRecruit_Config.invitations[0].horizontalAlignment=1;
SiteRecruit_Config.invitations[0].verticalAlignment=0;
SiteRecruit_Config.invitations[0].horizontalMargin=0;
SiteRecruit_Config.invitations[0].verticalMargin=0;
SiteRecruit_Config.invitations[0].hideBlockingElements=true;
SiteRecruit_Config.invitations[0].autoCentering=true;
SiteRecruit_Config.invitations[0].trackerUrl='/library/svy/SiteRecruit_Tracker_2944mt4.htm';

SiteRecruit_Config.invitations[1]=new SiteRecruit_InvitationConfiguration();
SiteRecruit_Config.invitations[1].weight=50;
SiteRecruit_Config.invitations[1].projectId='p12038685';
SiteRecruit_Config.invitations[1].invitationType=2;
SiteRecruit_Config.invitations[1].acceptUrl='http://survey2.surveysite.com/wix/p12038685.aspx';
SiteRecruit_Config.invitations[1].viewUrl='http://web.survey-poll.com/tc/CreateLog.aspx';
SiteRecruit_Config.invitations[1].acceptParams='mth=2&l=12&site=90';
SiteRecruit_Config.invitations[1].viewParams='log=comscore/view/p12038685-view.log&site=90';
SiteRecruit_Config.invitations[1].invitationContent='<table width="360" cellpadding="3" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr><td> <table width="100%" cellpadding="1" cellspacing="0" border="0" bgcolor="#999999"><tr><td> <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr valign="top"><td> <img src="/library/svy/logo-stripe.gif" /><a href="Close" onclick="@declineHandler"><img border="0" src="/library/svy/close.gif" /></a><br /> <img src="/library/svy/top-stripe.gif" /> <table width="100%" cellpadding="5"><tr><td>  <!-- Intro text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000;">Microsoft mène une étude en ligne pour comprendre comment est utilisé le site Web Microsoft.com.  Nous aimerions savoir quelles pages vous avez consultées aujourd\'hui et vous faire participer à une étude une fois que vous quitterez le site Web Microsoft.com.  Voulez-vous participer à cette étude ?</div> <br />  <!-- Invite form. --> <div align="center" style="margin-bottom: 15px"> <input type="button" value="  Oui  " onclick="@acceptHandler" />&nbsp;&nbsp; <input type="button" value=" Non " onclick="@declineHandler" />  <!-- Register the view. --> <img src="@viewUrlAndParams" width="0" height="0" style="margin: 0; padding: 0;" />  </div>  <!-- Footer text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000; margin-top: 0px;"><a href="http://www.microsoft.com/info/fr/privacy.mspx" target="_blank">Déclaration de confidentialité</a></div>  </td></tr></table> <img src="/library/svy/bottom-stripe.gif" /></td></tr></table> </td></tr></table> </td></tr></table>   ';
SiteRecruit_Config.invitations[1].invitationHeight=210;
SiteRecruit_Config.invitations[1].invitationWidth=390;
SiteRecruit_Config.invitations[1].revealDelay=1000;
SiteRecruit_Config.invitations[1].horizontalAlignment=1;
SiteRecruit_Config.invitations[1].verticalAlignment=0;
SiteRecruit_Config.invitations[1].horizontalMargin=0;
SiteRecruit_Config.invitations[1].verticalMargin=0;
SiteRecruit_Config.invitations[1].hideBlockingElements=true;
SiteRecruit_Config.invitations[1].autoCentering=true;
SiteRecruit_Config.invitations[1].trackerUrl='/library/svy/SiteRecruit_Tracker_p12038685_fr.htm';
}

if(SiteRecruit_Globals.isDE==true)
{
SiteRecruit_Config.invitations[0]=new SiteRecruit_InvitationConfiguration();
SiteRecruit_Config.invitations[0].weight=50;
SiteRecruit_Config.invitations[0].projectId='2944mt3';
SiteRecruit_Config.invitations[0].invitationType=2;
SiteRecruit_Config.invitations[0].acceptUrl='http://web.survey-poll.com/bin/survey.asp';
SiteRecruit_Config.invitations[0].viewUrl='http://web.survey-poll.com/bin/survey.asp';
SiteRecruit_Config.invitations[0].acceptParams='survey=/2900/2944mt&page=2944mtb-page3.xml&mtd=1&log=accept-2944mt3.log&site=45';
SiteRecruit_Config.invitations[0].viewParams='survey=/2900/2944mt&page=2944mtb-page3.xml&mtd=1&log=view-2944mt3.log&site=45';
SiteRecruit_Config.invitations[0].invitationContent='<table width="360" cellpadding="3" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr><td> <table width="100%" cellpadding="1" cellspacing="0" border="0" bgcolor="#999999"><tr><td> <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr valign="top"><td> <img src="/library/svy/logo-stripe.gif" /><a href="Close" onclick="@declineHandler"><img border="0" src="/library/svy/close.gif" /></a><br /> <img src="/library/svy/top-stripe.gif" /> <table width="100%" cellpadding="5"><tr><td>  <!-- Intro text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000;">Microsoft führt eine Onlineumfrage durch, um die Nutzung der Microsoft.com-Website zu verstehen. Wir würden gerne wissen, welche Seiten Sie heute besuchen, und bitten Sie, an einer Umfrage teilzunehmen, bevor Sie die Microsoft.com-Website verlassen.  Möchten Sie an der Umfrage teilnehmen?</div> <br />  <!-- Invite form. --> <div align="center" style="margin-bottom: 15px"> <input type="button" value="  Ja  " onclick="@acceptHandler" />&nbsp;&nbsp; <input type="button" value=" Nein " onclick="@declineHandler" />  <!-- Register the view. --> <img src="@viewUrlAndParams" width="0" height="0" style="margin: 0; padding: 0;" />  </div>  <!-- Footer text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000; margin-top: 0px;"><a href="http://www.microsoft.com/info/de/privacy.mspx" target="_blank">Informationen zur Datensicherheit</a></div>  </td></tr></table> <img src="/library/svy/bottom-stripe.gif" /></td></tr></table> </td></tr></table> </td></tr></table>   ';
SiteRecruit_Config.invitations[0].invitationHeight=210;
SiteRecruit_Config.invitations[0].invitationWidth=390;
SiteRecruit_Config.invitations[0].revealDelay=1000;
SiteRecruit_Config.invitations[0].horizontalAlignment=1;
SiteRecruit_Config.invitations[0].verticalAlignment=0;
SiteRecruit_Config.invitations[0].horizontalMargin=0;
SiteRecruit_Config.invitations[0].verticalMargin=0;
SiteRecruit_Config.invitations[0].hideBlockingElements=true;
SiteRecruit_Config.invitations[0].autoCentering=true;
SiteRecruit_Config.invitations[0].trackerUrl='/library/svy/SiteRecruit_Tracker_2944mt3.htm';

SiteRecruit_Config.invitations[1]=new SiteRecruit_InvitationConfiguration();
SiteRecruit_Config.invitations[1].weight=50;
SiteRecruit_Config.invitations[1].projectId='p12038685';
SiteRecruit_Config.invitations[1].invitationType=2;
SiteRecruit_Config.invitations[1].acceptUrl='http://survey2.surveysite.com/wix/p12038685.aspx';
SiteRecruit_Config.invitations[1].viewUrl='http://web.survey-poll.com/tc/CreateLog.aspx';
SiteRecruit_Config.invitations[1].acceptParams='mth=2&l=7&site=90';
SiteRecruit_Config.invitations[1].viewParams='log=comscore/view/p12038685-view.log&site=90';
SiteRecruit_Config.invitations[1].invitationContent='<table width="360" cellpadding="3" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr><td> <table width="100%" cellpadding="1" cellspacing="0" border="0" bgcolor="#999999"><tr><td> <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr valign="top"><td> <img src="/library/svy/logo-stripe.gif" /><a href="Close" onclick="@declineHandler"><img border="0" src="/library/svy/close.gif" /></a><br /> <img src="/library/svy/top-stripe.gif" /> <table width="100%" cellpadding="5"><tr><td>  <!-- Intro text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000;">Microsoft führt eine Onlineumfrage durch, um die Nutzung der Microsoft.com-Website zu verstehen. Wir würden gerne wissen, welche Seiten Sie heute besuchen, und bitten Sie, an einer Umfrage teilzunehmen, bevor Sie die Microsoft.com-Website verlassen. Möchten Sie an der Umfrage teilnehmen?</div> <br />  <!-- Invite form. --> <div align="center" style="margin-bottom: 15px"> <input type="button" value="  Ja  " onclick="@acceptHandler" />&nbsp;&nbsp; <input type="button" value=" Nein " onclick="@declineHandler" />  <!-- Register the view. --> <img src="@viewUrlAndParams" width="0" height="0" style="margin: 0; padding: 0;" />  </div>  <!-- Footer text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000; margin-top: 0px;"><a href="http://www.microsoft.com/info/de/privacy.mspx" target="_blank">Informationen zur Datensicherheit</a></div>  </td></tr></table> <img src="/library/svy/bottom-stripe.gif" /></td></tr></table> </td></tr></table> </td></tr></table>';
SiteRecruit_Config.invitations[1].invitationHeight=210;
SiteRecruit_Config.invitations[1].invitationWidth=390;
SiteRecruit_Config.invitations[1].revealDelay=1000;
SiteRecruit_Config.invitations[1].horizontalAlignment=1;
SiteRecruit_Config.invitations[1].verticalAlignment=0;
SiteRecruit_Config.invitations[1].horizontalMargin=0;
SiteRecruit_Config.invitations[1].verticalMargin=0;
SiteRecruit_Config.invitations[1].hideBlockingElements=true;
SiteRecruit_Config.invitations[1].autoCentering=true;
SiteRecruit_Config.invitations[1].trackerUrl='/library/svy/SiteRecruit_Tracker_p12038685_de.htm';
}

if(SiteRecruit_Globals.isJA==true)
{
SiteRecruit_Config.invitations[0]=new SiteRecruit_InvitationConfiguration();
SiteRecruit_Config.invitations[0].weight=50;
SiteRecruit_Config.invitations[0].projectId='2944mt2';
SiteRecruit_Config.invitations[0].invitationType=2;
SiteRecruit_Config.invitations[0].acceptUrl='http://web.survey-poll.com/bin/survey.asp';
SiteRecruit_Config.invitations[0].viewUrl='http://web.survey-poll.com/bin/survey.asp';
SiteRecruit_Config.invitations[0].acceptParams='survey=/2900/2944mt&page=2944mtb-page2.xml&mtd=1&log=accept-2944mt2.log&site=28';
SiteRecruit_Config.invitations[0].viewParams='survey=/2900/2944mt&page=2944mtb-page2.xml&mtd=1&log=view-2944mt2.log&site=28';
SiteRecruit_Config.invitations[0].invitationContent='<table width="360" cellpadding="3" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr><td> <table width="100%" cellpadding="1" cellspacing="0" border="0" bgcolor="#999999"><tr><td> <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr valign="top"><td> <img src="/library/svy/logo-stripe.gif" /><a href="Close" onclick="@declineHandler"><img border="0" src="/library/svy/close.gif" /></a><br /> <img src="/library/svy/top-stripe.gif" /> <table width="100%" cellpadding="5"><tr><td>  <!-- Intro text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000;">マイクロソフトは、Microsoft.com Web サイトのご利用状況を把握する目的でオンライン アンケートを実施しています。皆様が今日アクセスしたページを確認させていただき、Microsoft.com Web サイトから移動するときにアンケートへのご記入をお願いしたいと考えています。  アンケートにご協力いただけますか。</div> <br />  <!-- Invite form. --> <div align="center" style="margin-bottom: 15px"> <input type="button" value="  はい  " onclick="@acceptHandler" />&nbsp;&nbsp; <input type="button" value=" いいえ " onclick="@declineHandler" />  <!-- Register the view. --> <img src="@viewUrlAndParams" width="0" height="0" style="margin: 0; padding: 0;" />  </div>  <!-- Footer text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000; margin-top: 0px;"><a href="http://www.microsoft.com/japan/privacy/default.mspx" target="_blank">プライバシーに関する声明</a></div>  </td></tr></table> <img src="/library/svy/bottom-stripe.gif" /></td></tr></table> </td></tr></table> </td></tr></table>   ';
SiteRecruit_Config.invitations[0].invitationHeight=210;
SiteRecruit_Config.invitations[0].invitationWidth=390;
SiteRecruit_Config.invitations[0].revealDelay=1000;
SiteRecruit_Config.invitations[0].horizontalAlignment=1;
SiteRecruit_Config.invitations[0].verticalAlignment=0;
SiteRecruit_Config.invitations[0].horizontalMargin=0;
SiteRecruit_Config.invitations[0].verticalMargin=0;
SiteRecruit_Config.invitations[0].hideBlockingElements=true;
SiteRecruit_Config.invitations[0].autoCentering=true;
SiteRecruit_Config.invitations[0].trackerUrl='/library/svy/SiteRecruit_Tracker_2944mt2.htm';

SiteRecruit_Config.invitations[1]=new SiteRecruit_InvitationConfiguration();
SiteRecruit_Config.invitations[1].weight=50;
SiteRecruit_Config.invitations[1].projectId='p12038685';
SiteRecruit_Config.invitations[1].invitationType=2;
SiteRecruit_Config.invitations[1].acceptUrl='http://survey2.surveysite.com/wix/p12038685.aspx';
SiteRecruit_Config.invitations[1].viewUrl='http://web.survey-poll.com/tc/CreateLog.aspx';
SiteRecruit_Config.invitations[1].acceptParams='mth=2&l=17&site=90';
SiteRecruit_Config.invitations[1].viewParams='log=comscore/view/p12038685-view.log&site=90';
SiteRecruit_Config.invitations[1].invitationContent='<table width="360" cellpadding="3" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr><td> <table width="100%" cellpadding="1" cellspacing="0" border="0" bgcolor="#999999"><tr><td> <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF"><tr valign="top"><td> <img src="/library/svy/logo-stripe.gif" /><a href="Close" onclick="@declineHandler"><img border="0" src="/library/svy/close.gif" /></a><br /> <img src="/library/svy/top-stripe.gif" /> <table width="100%" cellpadding="5"><tr><td>  <!-- Intro text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000;">マイクロソフトは、Microsoft.com Web サイトのご利用状況を把握する目的でオンライン アンケートを実施しています。皆様が今回アクセスしたページを確認させていただき、Microsoft.com Web サイトから移動するときにアンケートへのご記入をお願いしたいと考えています。アンケートにご協力いただけますか。</div> <br />  <!-- Invite form. --> <div align="center" style="margin-bottom: 15px"> <input type="button" value="  はい  " onclick="@acceptHandler" />&nbsp;&nbsp; <input type="button" value=" いいえ " onclick="@declineHandler" />  <!-- Register the view. --> <img src="@viewUrlAndParams" width="0" height="0" style="margin: 0; padding: 0;" />  </div>  <!-- Footer text. --> <div style="font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 11px; color: #000000; margin-top: 0px;"><a href="http://www.microsoft.com/japan/privacy/default.mspx" target="_blank">プライバシーに関する声明</a></div>  </td></tr></table> <img src="/library/svy/bottom-stripe.gif" /></td></tr></table> </td></tr></table> </td></tr></table>   ';
SiteRecruit_Config.invitations[1].invitationHeight=210;
SiteRecruit_Config.invitations[1].invitationWidth=390;
SiteRecruit_Config.invitations[1].revealDelay=1000;
SiteRecruit_Config.invitations[1].horizontalAlignment=1;
SiteRecruit_Config.invitations[1].verticalAlignment=0;
SiteRecruit_Config.invitations[1].horizontalMargin=0;
SiteRecruit_Config.invitations[1].verticalMargin=0;
SiteRecruit_Config.invitations[1].hideBlockingElements=true;
SiteRecruit_Config.invitations[1].autoCentering=true;
SiteRecruit_Config.invitations[1].trackerUrl='/library/svy/SiteRecruit_Tracker_p12038685_ja.htm';
}

function SiteRecruit_CookieUtilities(){ this.cookieDurationFactor=1000 * 60 * 60 * 24; this.cookieRemovalDate='Fri, 02-Jan-1970 00:00:00 GMT'; this.setSurveyCookie=CookieUtilities_setSurveyCookie;this.getSurveyCookie=CookieUtilities_getSurveyCookie;this.removeSurveyCookie=CookieUtilities_removeSurveyCookie;this.surveyCookieExists=CookieUtilities_surveyCookieExists; function CookieUtilities_setSurveyCookie(cookieType){var currentDate=new Date();var expireDate=new Date();if(SiteRecruit_Config.cookieLifetimeType==SiteRecruit_Constants.cookieLifetimeType.duration){expireDate.setTime(currentDate.getTime()+(SiteRecruit_Config.cookieDuration * this.cookieDurationFactor));}else{expireDate.setTime(Date.parse(SiteRecruit_Config.cookieExpireDate));}var c='='+cookieType;if(cookieType==SiteRecruit_Constants.cookieType.inProgress){var j=SiteRecruit_Constants.cookieJoinChar;c+=j+escape(document.location)+j+currentDate.getTime()+j+'0';}c+='; path='+SiteRecruit_Config.cookiePath;if(cookieType==SiteRecruit_Constants.cookieType.alreadyAsked){c+='; expires='+expireDate.toGMTString();}if(SiteRecruit_Config.cookieDomain!=''){c+='; domain='+SiteRecruit_Config.cookieDomain;}document.cookie=SiteRecruit_Config.cookieName+c;return true;} function CookieUtilities_getSurveyCookie(){var c='';c=document.cookie.toString();var index=c.indexOf(SiteRecruit_Config.cookieName);var endc=c.length;c=c.substring(index,endc);var ind1=c.indexOf(';');if(ind1!=-1){c=c.substring(0,ind1);}var ind2=c.indexOf('=');c=c.substring(ind2+1);if(index==-1)return null;return c;} function CookieUtilities_removeSurveyCookie(){var c=SiteRecruit_Config.cookieName+'='+'; path='+SiteRecruit_Config.cookiePath+'; expires='+this.cookieRemovalDate;if(SiteRecruit_Config.cookieDomain!=''){c+='; domain='+SiteRecruit_Config.cookieDomain;}document.cookie=c;} function CookieUtilities_surveyCookieExists(cookieType){var t='';if(cookieType){t=cookieType;}return(document.cookie.indexOf(SiteRecruit_Config.cookieName+'='+t)!=-1)}}SiteRecruit_Globals.cookieUtils=new SiteRecruit_CookieUtilities();function SiteRecruit_Primer(){ this.isEligible=Primer_isEligible; function Primer_isEligible(){if(!SiteRecruit_Config.useCookie||!SiteRecruit_Globals.cookieUtils.surveyCookieExists()){ if(SiteRecruit_Config.frequency>Math.random()){return true;}}return false;}}SiteRecruit_Globals.startBuilder=false;if(SiteRecruit_Globals.isInternetExplorer||SiteRecruit_Globals.isMozilla){ SiteRecruit_Globals.primer=new SiteRecruit_Primer();if(SiteRecruit_Globals.primer.isEligible()){SiteRecruit_Globals.startBuilder=true;document.write('<script language="JavaScript" src="/library/svy/SiteRecruit_InvitationBuilder.js"></script>');}}