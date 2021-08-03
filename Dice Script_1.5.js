/*
 * 이 스크립트는 공부용으로는 매우 부적합합니다
 * 1월 4일 제작 시작
 * 1월 7일 1.0
 * Made By Acsiper
 
 ---체인지로그---
 * 1.0
 -기본틀 완성


*/



const codeName = "";
const Ver = "1.5";
var cplisti = "";
function readURL(url) {
	try {
		
		var URLContent = "";
		var bufferedReader = new java.io.BufferedReader(new java.io.InputStreamReader(java.net.URL(url).openStream()));
		
		var temp = "";
		while ((temp = bufferedReader.readLine()) != null) {
			URLContent += (URLContent == "" ? temp :  "\n" + temp);
		}
		bufferedReader.close();
		
		return URLContent;
	
	} catch(e) {
		print("인터넷 연결이 끊어져있거나 링크가 올바르지 않습니다.");
		
	}
}
function toast(message){

ctx.runOnUiThread(new java.lang.Runnable({run: function(){

var text = new android.widget.TextView(ctx);
text.setText(message);
text.setTextSize(android.util.TypedValue.COMPLEX_UNIT_DIP, 20);
text.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
var toast = new android.widget.Toast(ctx);
toast.setView(text);
toast.show();

}}));}
/*
다이서가 될 시 - 다이서 DICER 가 된 것을 축하합니다!>_<
새로운 스킬을 습득하셨습니다!

새 퀘스트 추가!
새로운 퀘스트가 추가되었으니 확인하겠슴77ㅏ?

*/
var 인증 = false;
var sethp = 0;
//a
var tpTime = -1; //타임포즈 시간
var tpTime2 = -1;
var autoTP = false;
var atc = 0; //텔레포레이션 2단계 쿨탐
var mwc = 0; //사이코키네시스 2단계
var target = null;
var clS = -1, clC = -1;
var cvc = -1, cvW = null, cvT = null;
var zC = [], cC = [], sC = [], skC = [];
var lvc = 0;
var LeCool = 0;
var p = null;
var CvC = 0;
var k = 1;
var sx, sz, dx, dz;
var sp = 0.5;
var fp = 0.05;
var dp = 0.1;
var lp = 0.1;
var yaw = [];
var pitch = [];
var loadCool = 0;
//레비테이션 3차 : Gravity Press
//타임포즈 3차 : Time Control
const armors={"0":0,"298":1,"302":2,"306":2,"310":3,"314":2,"299":3,"303":5,"307":6,"311":8,"315":5,"300":2,"304":4,"308":5,"312":6,"316":3,"301":1,"305":1,"309":2,"313":3,"317":1};
var ae=[];
var Ent = {
	Chicken : 10,
Cow : 11,
Pig : 12,
Sheep : 13,
Wolf : 14,
Villager : 15,
MushroomCow : 16,
Squid : 17,
Bat : 19,
IronGolem : 20,
SnowGolem : 21,
Ocelot : 22,

Zombie : 32,
Creeper : 33,
Skeleton : 34,
Spider : 35,
PigZombie : 36,
Slime : 37,
Enderman : 38,
SliverFish : 39,
CaveSpider : 40,
Ghast : 41, 
LavaSlime : 42,
Blaze : 43,
ZombieVillager : 44,
Player : 63,
ItemEntity : 64,
PrimedTnt : 65,
FallingTile : 66,
ExperiencePotion : 68,
ExperienceOrb : 69,
FishingHook : 77,
Arrow : 80,
Snowball : 81,
ThrownEgg : 82,
Painting : 83,
Minecart : 84,
LargeFireball : 85,
ThrownPotion : 86,
Boat : 90,
Particle : 91,
LightningBolt : 93,
SmallFireball : 94,
}
ModPE.setItem(461, "book_enchanted", 0, "Dice");
ModPE.setItem(462, "book_enchanted", 0, "'?' Dice", 1);
var tutorial = false;
var tuton = 0;
var stat = ["C", 0, 0, 0, 0, 0, 0];
var Arank = ["no", "no", "no", "no", "no", "no"];
var Astep = [1, 1, 1, 1, 1, 1];
var Dicer = [];
var Having = [];
//타임포즈 텔레포레이션 사이코키네시스 클로킹 클레어보이언트 레비테이션

//사이코키네시스 2차 : Magical Wind : 염력으로 주위의 몹들을 뛰운다
//클로킹 2차 : Dark Step
var tpw = null, tw = null, pw = null, cw = null, cvw = null, lw = null;
var menu = null;
var questW = null;
var questT = null;
var Quest = {
	cool : 120,
	doing : false
};
var quest = [
{thing:"닭 3마리 잡기 - 보상 : 다이스2개", type:"사냥", id:10, reR:"B", reA:2, done:"none", count:0, max:3},
{thing:"소 5마리 잡기 - 보상 : 다이스3개", type:"사냥", id:11, reR:"B", reA:3, done:"none", count:0, max:5},
{thing:"참나무원목 20개 모으기 - 보상 : 다이스2개", type:"수집", id:17, reR:"B", reA:2, done:"none", count:20},
{thing:"화약 5개 모으기 - 보상 : 다이스1개", type:"수집", id:289, reR:"B", reA:1, done:"none", count:5},
{thing:"철 칼 1개 만들기 - 보상 : 다이스2개", type:"수집", id:267, reR:"B", reA:2, done:"none", count:1},
{thing:"ㄷㅏ이ㅇㅏ 5개 모으기 - 보상 : 다이스4개", type:"수집", id:264, reR:"B", reA:4, done:"none", count:5},
{thing:"다이아 갑옷 1개 만들기 - 보상 : 다이스3개", type:"수집", id:311, reR:"B", reA:3, done:"none", count:1},
{thing:"좀비 10마리 잡기 - 보상 : 다이스3개", type:"사냥", id:32, reR:"B", reA:3, done:"none", count:0, max:10},
{thing:"거미 15마리 잡기 - 보상 : 다이스3개", type:"사냥", id:35, reR:"B", reA:3, done:"none", count:0, max:15},
{thing:"지옥갈준비 - 옵시디언 15개 - 보상 : 다이스5개", type:"수집", id:49, reR:"B", reA:5, done:"none", count:15},
{thing:"지옥갈준비 - 라이터 1개 - 보상 : 다이스1개", type:"수집", id:259, reR:"B", reA:1, done:"none", count:1},
{thing:"네더와트 9개 캐기 - 보상 : 다이스3개", type:"수집", id:372, reR:"B", reA:3, done:"none", count:9},
{thing:"블레이즈 5마리 잡기 - 보상 : 다이스4개", type:"사냥", id:43, reR:"B", reA:4, done:"none", count:0, max:5},
//{thing:"스켈레톤 20마리 잡기 - 보상 : 다이스5개", type:"사냥", id:34, reR:"B", reA:5, done:"none", count:0, max:20},
{thing:"≥첫번째 지옥퀘스트의 마지막!≤가스트 10마리 잡기 - 보상 : '?' 다이스", type:"사냥", id:41, reR:"A", reA:1, done:"none", count:0, max:10},
{thing:"농사시작 - 씨앗 30개 - 보상 : 다이스3개(현재버젼 마지막 퀘스트)", type:"수집", id:295, reR:"B", reA:3, done:"none", count:30},
];
function readFile(path){
try{
var channel=new java.io.FileInputStream(path).getChannel();
var buffer=java.nio.ByteBuffer.allocate(channel.size());
channel.read(buffer);
channel.close();
return new java.lang.String(buffer.array());
}catch(e){clientMessage(e);}
}

function writeFile(path,str){
try{
var channel=new java.io.FileOutputStream(path).getChannel();
var buffer=java.nio.ByteBuffer.allocate(new java.lang.String(str).getBytes().length);
buffer.put(new java.lang.String(str).getBytes());
buffer.clear();
channel.write(buffer);
channel.close();
}catch(e){clientMessage(e);}
}
var dir = "/sdcard/DiceS/";
var dir2 = "/DiceS/"
if(!new java.io.File("/sdcard/DiceS/").exists()){
	try {
	print("베이스 구축 시작, 렉 걸릴수도")
	new java.io.File("/sdcard/DiceS/").mkdirs();
	writeFile(dir + "stat.txt", "B,0,0,0,0,0,0.5,0.05,0.1,0.1"); //랭크,눈금,근력,맷집,민첩,운,sp
	writeFile(dir + "option.txt", "none,none");
	writeFile(dir + "option2.txt", "false");
	writeFile(dir + "arank.txt", "no,no,no,no,no,no");
	writeFile(dir + "used.txt", "ABCD-ABCD-ABCD-ABCD");
	writeFile(dir + "astep.txt", "1,1,1,1,1,1");
	//타임포즈 텔레포레이션 사이코키네시스 클로킹 클레어보일언트 레비테이션
	
	downFile("https://www.dropbox.com/s/mud4ihg8a0xefi7/TP.jpg?dl=1", dir2, "TP.jpg");
	downFile("https://www.dropbox.com/s/gadwakns0jl45vo/T.jpg?dl=1", dir2, "T.jpg");
	downFile("https://www.dropbox.com/s/vonjbwt6bfj405k/P.jpg?dl=1", dir2, "P.jpg");
	downFile("https://www.dropbox.com/s/fx2ka87q0a9sc1j/L.jpg?dl=1", dir2, "L.jpg");
	downFile("https://www.dropbox.com/s/35i5bl5cipbd5le/CV.jpg?dl=1", dir2, "CV.jpg");
	downFile("https://www.dropbox.com/s/qtopnc72mrl4oyx/C.jpg?dl=1", dir2, "C.jpg");
	
	
	print("기본 베이스 구축 완료");
	print("맵 입장시 튜토리얼 자동 진행");
	tutorial = true;
	}catch(e){print(e);}
}

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), 
DP = ctx.getResources().getDisplayMetrics().density;


var mB = null;
const effect = {포화:MobEffect.saturation, 흡수:MobEffect.absorption, 체력신장:MobEffect.healthBoost, 위더:MobEffect.wither, 독:MobEffect.poison, 나약함:MobEffect.weakness, 허기:MobEffect.hunger, 야간투시:MobEffect.nightVision, 실명:MobEffect.blindness, 투명화:MobEffect.invisibility, 수중호흡:MobEffect.waterBreathing, 화염저항:MobEffect.fireResistance, 저항:MobEffect.damageResistance, 재생:MobEffect.regeneration, 멀미:MobEffect.confusion, 점프강화:MobEffect.jump, 즉시데미지:MobEffect.harm, 즉시회복:MobEffect.heal, 힘:MobEffect.damageBoost, 피로:MobEffect.digSlowdown,
성급함:MobEffect.digSpeed,
구속:MobEffect.movementSlowdown, 신속:MobEffect.movementSpeed};


//Entity.addEffect(ent, effect.신속, time, level, false, true);


function tuSet(){if(인증){
	if(tuton == 1){
		npc("X", "우선 이 스크립트는 웹툰 다이스를 모티브로 하여 제작되었엉. 그래서 웹툰 다이스를 정주행하고 이 스크립트를 플레이하기 바래에", "앙", "", "", "", "", tuSet, null, null, null, null);
	}if(tuton == 2){
		npc("X", "그럼 게임을 시작해볼77ㅏ!", "응응", "", "", "", "", tuSet, null, null, null, null);
	}if(tuton == 3){
		npc("X", "다이서 DICER 가 된 것을 축하합니다!>_<", "ㄱㅇㄷ", "", "", "", "", trash, null, null, null, null);
		writeFile(dir + "stat.txt", "B,3,0,0,0,0,0.5,0.05,0.1,0.1");
		stat[0] = "B";
		stat[1] = 3;
		stat[2] = 0;
		stat[3] = 0;
		stat[4] = 0;
		stat[5] = 0;
		stat[6] = 0.5;
	}
	tuton ++;
	}
}
function entityAddedHook(e){if(인증){
	
	if(Entity.getEntityTypeId(e) == 10 && Math.floor(Math.random()*3+1) == 2){
		
	var w =	Level.spawnMob(Entity.getX(e), Entity.getY(e)+2, Entity.getZ(e), 35, "skin/dicer.png");
		Entity.setRenderType(w, 3);
		Entity.setCollisionSize(w, 1, 2);
		Entity.addEffect(w, effect.신속, 20*1000000, Math.floor(Math.random()*3+1), false, true);
		Entity.addEffect(w, effect.재생, 20*1000000, Math.floor(Math.random()*3+1), false, true);
		Entity.addEffect(w, effect.점프강화, 20*1000000, Math.floor(Math.random()*3+1), false, true);
		Entity.addEffect(w, effect.저항, 20*1000000, 1, false, true);
		
		Entity.addEffect(w, effect.힘, 20*1000000, 1, false, true);
		var hr = Math.floor(Math.random()*100+50);
		Entity.setHealth(w, hr);
		Entity.setMaxHealth(w, hr);
	}
}
}
function TP()//Time Pause
{
for (var a in Entity.getAll())
{
	if(Entity.getAll()[a] != getPlayerEnt()){
Entity.setVelY(Entity.getAll()[a],0);
//Entity.setVelX(Entity.getAll()[a],0);

//if( Entity.getVelX(Entity.getAll()[a]) > 0){
Entity.setVelX(Entity.getAll()[a],-Entity.getVelX(Entity.getAll()[a]));
//}if( Entity.getVelX(Entity.getAll()[a]) < 0){
//Entity.setVelX(Entity.getAll()[a],Entity.getVelX(Entity.getAll()[a]));
//}
/*if( Entity.getVelY(Entity.getAll()[a]) > 0){
Entity.setVelY(Entity.getAll()[a],-Entity.getVelY(Entity.getAll()[a]));
}if( Entity.getVelY(Entity.getAll()[a]) < 0){
Entity.setVelY(Entity.getAll()[a],Entity.getVelY(Entity.getAll()[a]));
}*/
//if( Entity.getVelZ(Entity.getAll()[a]) > 0){
Entity.setVelZ(Entity.getAll()[a],-Entity.getVelZ(Entity.getAll()[a]));
//}if( Entity.getVelZ(Entity.getAll()[a]) < 0){
//Entity.setVelZ(Entity.getAll()[a],Entity.getVelZ(Entity.getAll()[a]));
//}
//Entity.setVelZ(Entity.getAll()[a],0);
//Entity.setRot(Entity.getAll()[a], yaw[a], pitch[a]);
}
}
}
function entityRemovedHook(e){
	if(인증){
	if(p == e){
		explode(Entity.getX(p), Entity.getY(p), Entity.getZ(p), 3);
			p = null;
	}
}
}
function VoyanceW(){
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {
	cvT = new android.widget.TextView(ctx);
	cvT.setText("");
	cvT.setTextSize(15);
		cvW = new android.widget.PopupWindow(cvT, -2, -2); 
cvW.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, DP * 50); 
	}catch(e){clientMessage(e);}
	}}));
}
function modTick() {if(인증){
	
	if(cvc > 0){
		var po = Player.getPointedEntity();
		if(po != -1){
			Entity.addEffect(po, effect.나약함, 80, 4, false, true);
			Entity.addEffect(po, effect.구속, 80, 2, false, true);
		}
		zC = [];
		cC = [];
		skC = [];
		sC = [];
		var al = Entity.getAllMob();
		for each(var a in al){
			var ei = Entity.getEntityTypeId(a);
			if(ei > 31 && ei < 45 && Entity.getDst(a, getPlayerEnt()) < 50){
				if(ei == 32 || ei == 36 || ei == 44){
					zC.push(a);
				}if(ei == 33){
					cC.push(a);
				}if(ei == 34){
					skC.push(a);
				}if(ei == 35){
					sC.push(a);
					
				}
				
		}
		}ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
				 cvT.setText("좀비:"+zC.length+"/크리퍼:"+cC.length+"/스켈레톤:"+skC.length+"/거미:"+sC.length);
				 }}));
	}if(cvc == 0){
		close(cvW);
		cvc = -1;
		toast("Brain control 사용 종료");
	}
	if(target != null){
		if(Entity.getDst(getPlayerEnt(), target) > 3){
			arrow = getPlayerEnt();
			mob = target;
	var x=Math.floor(Entity.getX(mob))-Math.floor(Entity.getX(arrow));
var y=Math.floor(Entity.getY(mob))-Math.floor(Entity.getY(arrow));
var z=Math.floor(Entity.getZ(mob))-Math.floor(Entity.getZ(arrow));
s=Math.sqrt(Math.abs(x*x+y*y+z*z));
setVelX(arrow,x/s*4);
setVelY(arrow,y/s*4);
setVelZ(arrow,z/s*4); 
		}	if(Entity.getDst(getPlayerEnt(), target) < 3){
			Entity.addEffect(target, effect.위더, 40, 2, false, true);
			target = null;
	}
	}
	if(mwc > 0){
		mwc --;
		var al = Entity.getAllMob();
		for each(var a in al){
			if(Entity.getDst(a, getPlayerEnt()) < 6){
				setVelY(a, 0.7);
			}
		}
	}if(mwc == 1){
		toast("Magical Wind 사용 종료");
	}
	if(lvc > 0){
		var po = Player.getPointedEntity();
		if(po != -1){
			px=(getPlayerX());
py=(getPlayerY());
pz=(getPlayerZ());
pe=getPlayerEnt();
yaw=(getYaw());
pitch=(getPitch());
sin=-Math.sin(yaw/180*Math.PI);
cos=Math.cos(yaw/180*Math.PI);
tan=-Math.sin(pitch/180*Math.PI);
pcos=Math.cos(pitch/180*Math.PI);
setVelX(po, 3*sin);
setVelY(po, 0.8);
setVelZ(po, 3*cos);
		}
	}if(lvc == 1){
		toast("Air Gravity 사용 종료");
	}
	if(autoTP){
		if(atc > 0){
			atc --;
		}
		var al = Entity.getAllMob();
		for each(var a in al){
			var ei = Entity.getEntityTypeId(a);
			if(ei > 31 && ei < 45 && Entity.getDst(a, getPlayerEnt()) < 2.3){
				px=(Entity.getX(a));
py=(Entity.getY(a));
pz=(Entity.getZ(a));
pe=getPlayerEnt();
yaw=(Entity.getYaw(a));
pitch=(Entity.getPitch(a));
sin=-Math.sin(yaw/180*Math.PI);
cos=Math.cos(yaw/180*Math.PI);
tan=-Math.sin(pitch/180*Math.PI);
pcos=Math.cos(pitch/180*Math.PI);
if(stat[1] > 0){
Entity.setPosition(pe,px-4*sin*pcos,py+2,pz-4*cos*pcos,4);
stat[1] -= 1;
atc = 60;
toast("사용");
}

			}
		}
	}
	if(p != null){
		if(Entity.getVelX(p) == 0 && Entity.getVelY(p) == 0 && Entity.getVelZ(p) == 0){
			explode(Entity.getX(p), Entity.getY(p), Entity.getZ(p), 3);
			p = null;
		}
	}
	if(CvC > 0){
		CvC --;
	}
	if(CvC == 1){
		toast("클레어 보이언트 능력 종료");
		lp -= 20;
	}
	if(Arank[4] == "yes"){
		for each(var a in Entity.getAllMob()){
			if(a != getPlayerEnt()){
				if(CvC == 0){
				Entity.setNameTag(a, Entity.getHealth(a));
				}if(CvC > 0){
					Entity.setNameTag(a, "체력:"+Entity.getHealth(a)+"/X속력:"+Math.floor(Entity.getVelX(a))+"/Y속력:"+Math.floor(Entity.getVelY(a))+"/Z속력:"+Math.floor(Entity.getVelZ(a)));
					
				}
			}
		}
	}
	if(LeCool > 0){
		LeCool --;
		px=(getPlayerX());
py=Math.floor(getPlayerY());
pz=(getPlayerZ());
pe=getPlayerEnt();
yaw=(getYaw());
pitch=(getPitch());
sin=-Math.sin(yaw/180*Math.PI);
cos=Math.cos(yaw/180*Math.PI);
tan=-Math.sin(pitch/180*Math.PI);
pcos=Math.cos(pitch/180*Math.PI);
		if(getTile(px, py-6, pz) != 0 && getTile(px, py-5, pz) == 0){
			Entity.addEffect(getPlayerEnt(),11,40,4,false,true);
		}
	}if(LeCool == 200){
		toast("레비테이션 지속 시간이 10초남았습니다. 내려와주세요");
	}if(LeCool == 1){
		toast("레비테이션 종료");
		Player.setCanFly(false);
	}
	if(clS > 0){
		clS --;
	}if(clS == 0){
		toast("클로킹 종료");
		clS = -1;
	}if(clC > 0){
		clC --;
	}if(clC == 0){
		clC = -1;
		toast("클로킹 쿨타임 종료");
	}
	if(tpTime > 0) {
		tpTime --;
		
TP();

	}if(tpTime == 0){
		tpTime = -1;
		toast("타임퍼즈 시간 종료");
		
	}if(tpTime2 > 0) {
		tpTime2 --;
		
TP();
if(tpTime2 % 40 == 0){
for each(var a in Entity.getAll()){
	if(a != getPlayerEnt()){
		Entity.setFireTicks(a, 1);
	}
}
}
	}if(tpTime2 == 0){
		tpTime2 = -1;
		toast("타임브레이크 시간 종료");
		
	}
	k--;
if(k==0)
{
sx=getPlayerX()
sy=getPlayerY()
sz=getPlayerZ()
k=2;
}
if(getPlayerX()!=sx && stat[4] >= 100)
{
setVelX(getPlayerEnt(),(getPlayerX()-sx)*sp);
setVelZ(getPlayerEnt(),(getPlayerZ()-sz)*sp);

}
	if(!Quest.doing){
		if(Quest.cool > 0) {
			Quest.cool --;
		}if(Quest.cool == 0){
			Quest.cool = -1;
			vibrate(500);
			for(var a in quest){
				if(quest[a].done == "none"){
					questNPC("X - 퀘스트 도착!", a);
					return;
				}
			}
			
		}
	}
	for(var a in quest){
		if(Quest.doing){
			if(quest[a].done == "doing"){
				if(quest[a].type == "사냥"){
				//	clientMessage(a);
				ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
questT.setText(quest[a].thing + "/("+quest[a].count+"/"+quest[a].max+")");

}}));
if(quest[a].count == quest[a].max){
					quest[a].count = 0;
					quest[a].done = "done";
					Quest.doing = false;
					Quest.cool = 60;
					npc("X", "퀘스트 성공!\n보상 "+quest[a].reR+"랭크 다이스 "+quest[a].reA+"개 지급!!", "확인", "", "", "", "", trash, null, null, null, null);
					if(quest[a].reR == "B"){
						addItemInventory(461, quest[a].reA);
					}else {
						addItemInventory(462, 1);
					}
					
		//clientMessage("ww")			
		//여기로 1이배달된다
				}
				
				}if(quest[a].type == "수집"){
					ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
questT.setText(quest[a].thing + "/("+gia(quest[a].id, 0)+"/"+quest[a].count+")");
}}));
if(gia(quest[a].id, 0) >= quest[a].count) {
	quest[a].done = "done";
					Quest.doing = false;
					Quest.cool = 60;
					npc("X", "퀘스트 성공!\n보상 "+quest[a].reR+"랭크 다이스 "+quest[a].reA+"개 지급!!", "확인", "", "", "", "", trash, null, null, null, null);
					if(quest[a].reR == "B"){
						addItemInventory(461, quest[a].reA);
					}else {
						addItemInventory(462, 1);
					}
}
				}
				return;
			}
		}if(!Quest.doing){
			ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
questT.setText("진행중인 퀘스트가 없습니다앙");
}}));
		}
	}
	pe = Player.getEntity()
if(Entity.getHealth(pe) > sethp){
sethp = Entity.getHealth(pe);
}
if(Entity.getHealth(pe) < sethp){
var hpm = sethp-Entity.getHealth(pe);
sethp = Entity.getHealth(pe);
PlayerDmgHook(hpm);

}


	//민첩
	for(var i in ae)
{
if(ae[i].harm>0)
{
ae[i].harm--;
}
if(ae[i].harm<=0)
{
ae.splice(i,1);
}
}

if(loadCool > 0){
	loadCool --;
}if(loadCool == 1){
	var rr = readFile(dir + "stat.txt").toString();
	var r2 = readFile(dir + "option.txt").toString();
	var r3 = readFile(dir + "option2.txt").toString();
	var r4 = readFile(dir + "arank.txt").toString().split(",");
	var r5 = readFile(dir + "astep.txt").toString();
for(var a in r4){
	Arank[a] = ""+r4[a]+"";
}
	if(r3 == "true"){
		Quest.doing = true;
	}else if(r3 == "false"){
		Quest.doing = false;
	}
	var s2 = r2.split(",");
	for(var a in s2){
		quest[a].done = ""+s2[a]+"";
	}
	var s3 = r3.split(",");
	for(var a in s3){
		Arank[a] = ""+s3[a]+"";
	}
var s5 = r5.split(",");
	for(var a in s5){
		Astep[a] = parseInt(s5[a]);
	}
	var s = rr.split(",");
	stat[0] = (s[0]);
		stat[1] = parseInt(s[1]);
		stat[2] = parseInt(s[2]);
		stat[3] = parseInt(s[3]);
		stat[4] = parseInt(s[4]);
		stat[5] = parseInt(s[5]);
		sp = parseInt(s[6]);
		fp = parseInt(s[7]);
		dp = parseInt(s[8]);
		lp = parseInt(s[9]);
	toast("Load 완료");
//	TimePauseWindow();

//	TimePauseWindow();
//	TeleporationWindow();
//	PsycokinesisWindow();
//	CloakingWindow();
	
//	ClairvoyanceWindow();

//	LevitationWindow();
//	Arank[4] = "yes";
//타임포즈 텔레포레이션 사이코키네시스 클로킹 클레어보일언트 레비테이션
if(Arank[0] == "yes"){
	TimePauseWindow();
}if(Arank[1] == "yes"){
	TeleporationWindow();
}if(Arank[2] == "yes"){
	PsycokinesisWindow();
}if(Arank[3] == "yes"){
	CloakingWindow();
}if(Arank[4] == "yes"){
	ClairvoyanceWindow();
}if(Arank[5] == "yes"){
	LevitationWindow();
}
}
}
}
function PlayerDmgHook(Dmg){
//clientMessage("아야")
Entity.setHealth(getPlayerEnt(), Entity.getHealth(getPlayerEnt())+Dmg*dp/100);
}


function deathHook(m, v){if(인증){
	if(Player.isPlayer(m)){
		//clientMessage("2");
		if(Entity.getEntityTypeId(v) == 35 && Entity.getMaxHealth(v) > 49){
			Level.dropItem(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 1, 461, Math.floor(Math.random()*5+1), 0);
		}
		for(var a in quest){
			if(quest[a].done == "doing" && quest[a].type == "사냥"){
				if(quest[a].id == Entity.getEntityTypeId(v)){
					quest[a].count ++;
					
				}
			}
		}
	}
	}
}
function attackHook(a, v){if(인증){
	if(tpTime > 0){
		tpTime = -1;
	}if(tpTime2 > 0){
		tpTime2 = -1;
	}
	attack(v, fp);
	var rr = Math.floor(Math.random()*100+1);
	if(rr < lp){
		Entity.setFireTicks(v, 10);
	}
	
}
}
function attack(v,p)
{
for(var i in ae)
{
if(ae[i].e==v)
{
return;
}
}
ae.push({e:v,harm:10});
var hp=Entity.getHealth(v);
var armor=0;//입고있는갑옷의 방어력
if(armor<25)
{
var armor2=-armor*4/100+1;
var damage=Math.round(armor2*p);
if(damage>0)
{
if(hp-damage>0)
{
Entity.setHealth(v,hp-damage);
}
else
{
Entity.setHealth(v,1);
}
}
}
else
{
var armor2=armor/4;
var damage=Math.round(p/armor2);
if(damage>0)
{
if(hp-damage>0)
{
Entity.setHealth(v,hp-damage);
}
else
{
Entity.setHealth(v,1);
}
}
}
}
function useItem(x, y, z, i, b){
	if(인증){
	if(i == 461){
Entity.setCarriedItem(Player.getEntity(), 461, Player.getCarriedItemCount()-1, 0);
var rr = Math.floor(Math.random()*6+1);
stat[1] += rr;
toast("눈금 "+rr+"획득 완료!");
}if(i == 462){
	if(gia(462, 0) > 2){
		toast("버그 사용은 나빠요 ㅠㅠㅜ");
		Entity.setCarriedItem(Player.getEntity(), 462, 0, 0);
		return;
	}
	ArankRandom();
	
	
}
}
}
function ArankRandom(){
	var r = Math.floor(Math.random()*5+0);
	if(r == 0){
		if(Arank[0] == "no"){
	TimePauseWindow();
	toast("타임포즈를 얻었습니다");
	Arank[0] = "yes";Entity.setCarriedItem(Player.getEntity(), 462, Player.getCarriedItemCount()-1, 0);stat[0] = "A";
		}else if(Arank[0] == "yes"){
			ArankRandom();
		}
	}if(r == 1){
		if(Arank[1] == "no"){
	TeleporationWindow();
	toast("텔레포레이션을 얻었습니다");
	Arank[1] = "yes";Entity.setCarriedItem(Player.getEntity(), 462, Player.getCarriedItemCount()-1, 0);stat[0] = "A";
		}else if(Arank[1] == "yes"){
			ArankRandom();
		}
	}if(r == 2){
		if(Arank[2] == "no"){
	PsycokinesisWindow();
	toast("사이코키네시스를 얻었습니다");
	Arank[2] = "yes";Entity.setCarriedItem(Player.getEntity(), 462, Player.getCarriedItemCount()-1, 0);stat[0] = "A";
		}else if(Arank[2] == "yes"){
			ArankRandom();
		}
	}if(r == 3){
		if(Arank[3] == "no"){
	CloakingWindow();
	toast("클로킹을 얻었습니다");
	Arank[3] = "yes";Entity.setCarriedItem(Player.getEntity(), 462, Player.getCarriedItemCount()-1, 0);stat[0] = "A";
		}else if(Arank[3] == "yes"){
			ArankRandom();
		}
	}if(r == 4){
		if(Arank[4] == "no"){
	ClairvoyanceWindow();
	toast("클레어보일언트를 얻었습니다");
	Arank[4] = "yes";Entity.setCarriedItem(Player.getEntity(), 462, Player.getCarriedItemCount()-1, 0);stat[0] = "A";
		}else if(Arank[4] == "yes"){
			ArankRandom();
		}
	}if(r == 5){
		if(Arank[5] == "no"){
	toast("레비테이션을 얻었습니다");
	Arank[5] = "yes";
	LevitationWindow();Entity.setCarriedItem(Player.getEntity(), 462, Player.getCarriedItemCount()-1, 0);stat[0] = "A";
		}else if(Arank[5] == "yes"){
			ArankRandom();
		}
	}
	/*
	if(Arank[rrr-1] == "yes"){
		ArankRandom();
		
	}else if(Arank[rrr-1] == "no"){
		
		//타임포즈 텔레포레이션 사이코키네시스 클로킹 클레어보일언트 레비테이션
		if(rrr-1 == 0){
	TimePauseWindow();
	toast("타임포즈를 얻었습니다");Arank[0] = "yes";
}if(rrr-1 == 1){
	TeleporationWindow();
	toast("텔레포레이션을 얻었습니다");Arank[1] = "yes";
}if(rrr-1 == 2){
	PsycokinesisWindow();
	toast("사이코키네시스를 얻었습니다");Arank[2] = "yes";
}if(rrr-1 == 3){
	CloakingWindow();
	toast("클로킹을 얻었습니다");Arank[3] = "yes";
}if(rrr-1 == 4){
	ClairvoyanceWindow();
	toast("클레어보일언트를 얻었습니다");Arank[4] = "yes";
}if(rrr-1 == 5){
	toast("레비테이션을 얻었습니다");Arank[5] = "yes";
	LevitationWindow();
}

	}*/
}
function createWindow() {if(인증){
ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try { 
var layout = new android.widget.RelativeLayout(ctx); 
layout.setGravity(android.view.Gravity.CENTER); 
var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
var gr2 = new android.graphics.drawable.GradientDrawable();
gr2.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr2.setColors([android.graphics.Color.parseColor("#00F2FF"),android.graphics.Color.parseColor("#00F2FF")]);
gr2.setCornerRadii([50,50,50,50,50,50,50,50]);
gr2.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
var btn1 = new android.widget.Button(ctx); 
btn1.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(DP * 50, DP * 50)); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {

//npc("X", "다이서 DICER 가 된 것을 축하합니다!>_<\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ntt", "확인", "a", "b", "c", "d", null, null, null, null, null);
mainMenu();
}
}));
btn1.setText("M"); 
btn1.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
layout.addView(btn1); 
btn1.setBackgroundDrawable(gr1);
btn1.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function(v,event)
{
switch(event.action){

case android.view.MotionEvent.ACTION_DOWN:

btn1.setBackgroundDrawable(gr2);
break;

case android.view.MotionEvent.ACTION_UP:
btn1.setBackgroundDrawable(gr1);
break;

}
return false;

}}));
//gr1.setColors([android.graphics.Color.parseColor("00fff0"),android.graphics.Color.parseColor("00fff0")]);
mB = new android.widget.PopupWindow(layout, -2, -2); 
mB.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, 0); 
} catch (e) {
print(e);
}
}
}));
}
}


function trash(){}
function leaveGame() {if(인증){
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
if(mB != null){
	mB.dismiss();
	mB = null;
}if(questW != null){
	questW.dismiss();
	questW = null;
}
close(tpw); close(tw); close(pw); close(cw); close(lw);close(cvw);close(cvW);
}}));
}
}
function close(win){
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
if(win != null){
	win.dismiss();
	win = null;
}
}}));
}
function Dialog(step, ab) {
	ctx.runOnUiThread( new java.lang.Runnable({
run: function(){
try{
var dg = new android.app.AlertDialog.Builder(ctx);
if(Astep[ab] == 1){
dg.setTitle(step+"능력 2단계 개방");
dg.setMessage(step+"능력 2단계를 개방하시겠습니까??[50]");
}if(Astep[ab] == 2){
dg.setTitle(step+"능력 3단계 개방");
dg.setMessage(step+"능력 3단계를 개방하시겠습니까??[100]");
}

dg.setPositiveButton("개방",new android.content.DialogInterface.OnClickListener({onClick:function(){
	if(Astep[ab] == 1){
if(stat[1] > 49){
	stat[1] -= 50;
	makeProgDialog(step, ab);
}else if(stat[1] < 51){
	toast("눈금이 부족합니다");
}
}
}}));
dg.setNegativeButton("취소",new android.content.DialogInterface.OnClickListener({onClick:function(){

}}));
dg.create().show();
}catch(e){
clientMessage(e);
}
}}));
}
function makeProgDialog(step, ab){
	var dialog = new android.app.ProgressDialog(ctx, 0);
	dialog.setProgressStyle(1);
	dialog.setMax(100);
	dialog.setCancelable(false);
	
		dialog.setTitle(step+"능력 강화중...");
		dialog.setMessage("실패 할 수도 있습니다...");
		dialog.show();
		new java.lang.Thread(new java.lang.Runnable({run: function(){
			for(var i=0;i<=100;i++){
				dialog.setProgress(i);
				java.lang.Thread.sleep(50);
			}
			dialog.dismiss();
			var rs = Math.floor(Math.random()*10+1);
			if(rs < 4){
				toast("강화 성공");
				Astep[ab] += 1;
			}else {
				toast("강화 실패...");
			}
		}})).start();
	
}
function TimePauseWindow(){
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {
	tpw=new android.widget.PopupWindow();

if(new java.io.File(dir+"TP.jpg").exists()) {
var iv=new android.widget.ImageView(ctx);
var bm=new android.graphics.BitmapFactory.decodeFile(dir+"/TP.jpg");
iv.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
iv.setImageBitmap(bm);
}
else {
toast("사진X");
}
iv.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	TimePauseMenu();
}
}));
tpw.setContentView(iv);
tpw.setWidth(DP * 50);
tpw.setHeight(DP * 50);
tpw.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
tpw.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, DP * 50);
	}catch(e){clientMessage(e);}
	}}));
}
function TimePauseMenu() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {var spot = 1;
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("Time Pause");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("눈금 1개로 10초를 멈춥니다");
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var t3 = new android.widget.TextView(ctx);
	t3.setText("눈금 : "+stat[1]);
	t3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t3.setTextSize(15);
	t3.setGravity(android.view.Gravity.CENTER);
	lay.addView(t3);
	var btn1 = new android.widget.Button(ctx); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(spot != 1){
	spot -= 1;
	}
	t5.setText(spot.toString());
}
}));
btn1.setText("-"); 
btn1.setTextColor(android.graphics.Color.BLACK);
btn1.setBackgroundDrawable(gr1);
lay.addView(btn1); 
var t5 = new android.widget.TextView(ctx);
	t5.setText(spot.toString());
	t5.setTextColor(android.graphics.Color.BLACK);
	t5.setTextSize(20);
	t5.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t5.setGravity(android.view.Gravity.CENTER);
	lay.addView(t5);
var btn2 = new android.widget.Button(ctx); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	spot += 1;
	t5.setText(spot.toString());
}
}));
btn2.setText("+"); 
btn2.setTextColor(android.graphics.Color.BLACK);
btn2.setBackgroundDrawable(gr1);
lay.addView(btn2); 
 
var btn4 = new android.widget.Button(ctx); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	removeEntity(64);
	if(stat[1] >= spot && tpTime == -1){
		for each(var a in Entity.getAll()){
		if(a != getPlayerEnt()){
			setVelY(a, 1.5);
		Entity.setPosition(a, Entity.getX(a), Entity.getY(a)+1, Entity.getZ(a));
		}
	}
	new java.lang.Thread({run:function(){
java.lang.Thread.sleep(500);

}}).start();


	tpTime += spot * 200;
	toast("타임포즈 시전");
	stat[1] -= spot;
	t3.setText("눈금 : "+stat[1]);
	
	}else {
		toast("눈금이 부족하거나 타임포즈 실행중입니다");
	}
}
}));
btn4.setText("사용"); 
btn4.setTextColor(android.graphics.Color.BLACK);
btn4.setBackgroundDrawable(gr1);
lay.addView(btn4); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(Astep[0] == 1){
Dialog("타임 포즈", 0);
}if(Astep[0] > 1){
TimePauseMenu2();
}
}
}));
if(Astep[0] == 1){
btn5.setText("2단계[50]"); 
}if(Astep[0] > 1){
btn5.setText("2단계"); 
}
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);

lay.addView(btn5); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	Window.dismiss();
	Window = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	var Window = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, 0, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){clientMessage(e);}
	}}));
}
function TimePauseMenu2() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {var spot = 3;
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("Time Break");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("눈금 3개로 10초를 멈추고 차원을 균열시켜 몹들에게 데미지를 줍니다");
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var t3 = new android.widget.TextView(ctx);
	t3.setText("눈금 : "+stat[1]);
	t3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t3.setTextSize(15);
	t3.setGravity(android.view.Gravity.CENTER);
	lay.addView(t3);
	var btn1 = new android.widget.Button(ctx); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(spot != 3){
	spot -= 3;
	}
	t5.setText(spot.toString());
}
}));
btn1.setText("-"); 
btn1.setTextColor(android.graphics.Color.BLACK);
btn1.setBackgroundDrawable(gr1);
lay.addView(btn1); 
var t5 = new android.widget.TextView(ctx);
	t5.setText(spot.toString());
	t5.setTextColor(android.graphics.Color.BLACK);
	t5.setTextSize(20);
	t5.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t5.setGravity(android.view.Gravity.CENTER);
	lay.addView(t5);
var btn2 = new android.widget.Button(ctx); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	spot += 3;
	t5.setText(spot.toString());
}
}));
btn2.setText("+"); 
btn2.setTextColor(android.graphics.Color.BLACK);
btn2.setBackgroundDrawable(gr1);
lay.addView(btn2); 
 
var btn4 = new android.widget.Button(ctx); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	removeEntity(64);
	if(stat[1] >= spot){
		for each(var a in Entity.getAll()){
		if(a != getPlayerEnt()){
			setVelY(a, 1);
		}
	}var thread=new java.lang.Thread({run:function(){
java.lang.Thread.sleep(500);

}});
thread.start();
	tpTime2 += spot/3 * 200;
	toast("타임브레이크 시전");
	stat[1] -= spot;
	t3.setText("눈금 : "+stat[1]);
	
	}else {
		toast("눈금이 부족합니다");
	}
}
}));
btn4.setText("사용"); 
btn4.setTextColor(android.graphics.Color.BLACK);
btn4.setBackgroundDrawable(gr1);
lay.addView(btn4); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(Astep[0] == 2){
Dialog("타임 포즈", 0);
}if(Astep[0] > 2){
//TimePauseMenu2();
}
}
}));
if(Astep[0] == 2){
btn5.setText("3단계[100]"); 
}if(Astep[0] > 2){
btn5.setText("3단계"); 
}
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);

lay.addView(btn5); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	Window.dismiss();
	Window = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	var Window = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, ctx.getScreenWidth() / 5, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){clientMessage(e);}
	}}));
}
function TeleporationWindow(){
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {
	tw=new android.widget.PopupWindow();

if(new java.io.File(dir+"T.jpg").exists()) {
var iv=new android.widget.ImageView(ctx);
var bm=new android.graphics.BitmapFactory.decodeFile(dir+"/T.jpg");
iv.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
iv.setImageBitmap(bm);
}
else {
toast("사진X");
}
iv.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	TeleporationMenu();
}
}));
tw.setContentView(iv);
tw.setWidth(DP * 50);
tw.setHeight(DP * 50);
tw.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
tw.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, DP * 100);
	}catch(e){clientMessage(e);}
	}}));
}
function TeleporationMenu() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {var spot = 6;
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("Teleporation");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("눈금 1개로 2m를 이동합니다. 최대 20m");
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var t3 = new android.widget.TextView(ctx);
	t3.setText("눈금 : "+stat[1]);
	t3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t3.setTextSize(15);
	t3.setGravity(android.view.Gravity.CENTER);
	lay.addView(t3);
	var btn1 = new android.widget.Button(ctx); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(spot != 1){
	spot -= 1;
	}
	t5.setText(spot.toString());
}
}));
btn1.setText("-"); 
btn1.setTextColor(android.graphics.Color.BLACK);
btn1.setBackgroundDrawable(gr1);
lay.addView(btn1); 
var t5 = new android.widget.TextView(ctx);
	t5.setText(spot.toString());
	t5.setTextColor(android.graphics.Color.BLACK);
	t5.setTextSize(20);
	t5.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t5.setGravity(android.view.Gravity.CENTER);
	lay.addView(t5);
var btn2 = new android.widget.Button(ctx); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(spot != 10){
	spot += 1;
	}
	t5.setText(spot.toString());
}
}));
btn2.setText("+"); 
btn2.setTextColor(android.graphics.Color.BLACK);
btn2.setBackgroundDrawable(gr1);
lay.addView(btn2); 
 
var btn4 = new android.widget.Button(ctx); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(stat[1] >= spot){
	px=(getPlayerX());
py=(getPlayerY());
pz=(getPlayerZ());
pe=getPlayerEnt();
yaw=(getYaw());
pitch=(getPitch());
sin=-Math.sin(yaw/180*Math.PI);
cos=Math.cos(yaw/180*Math.PI);
tan=-Math.sin(pitch/180*Math.PI);
pcos=Math.cos(pitch/180*Math.PI);
Entity.setPosition(pe,px+(spot*2)*sin*pcos,py,pz+(spot*2)*cos*pcos,spot*2);
	toast("텔레포레이션 시전");
	stat[1] -= spot;
	t3.setText("눈금 : "+stat[1]);
	
	}else {
		toast("눈금이 부족합니다");
	}
}
}));
btn4.setText("사용"); 
btn4.setTextColor(android.graphics.Color.BLACK);
btn4.setBackgroundDrawable(gr1);
lay.addView(btn4); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(Astep[1] == 1){
Dialog("텔레포레이션", 1);
}if(Astep[1] > 1){
//TimePauseMenu2();
TeleporationMenu2();
}
}
}));
if(Astep[1] == 1){
btn5.setText("2단계[50]"); 
}if(Astep[1] > 1){
btn5.setText("2단계"); 
}
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);

lay.addView(btn5); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	Window.dismiss();
	Window = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	var Window = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, 0, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){clientMessage(e);}
	}}));
}
function TeleporationMenu2() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {var spot = 3;
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("AUTO DOTGE");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("상대가 1m안에 올시 자동으로 유리한 위치로 텔레포트. 쿨타임 존재. 눈금 1개 사용");
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var t3 = new android.widget.TextView(ctx);
	t3.setText("눈금 : "+stat[1]);
	t3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t3.setTextSize(15);
	t3.setGravity(android.view.Gravity.CENTER);
	lay.addView(t3);
	var btn1 = new android.widget.Button(ctx); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	autoTP = true;
	toast("활성화 완료");
}
}));
btn1.setText("활성화"); 
btn1.setTextColor(android.graphics.Color.BLACK);
btn1.setBackgroundDrawable(gr1);
lay.addView(btn1); 

var btn2 = new android.widget.Button(ctx); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	autoTP = false;
	toast("비활성화 완료");
}
}));
btn2.setText("비활성화"); 
btn2.setTextColor(android.graphics.Color.BLACK);
btn2.setBackgroundDrawable(gr1);
lay.addView(btn2); 
 

Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(Astep[0] == 2){
Dialog("텔레포레이션", 0);
}if(Astep[0] > 2){
//TimePauseMenu2();
}
}
}));
if(Astep[0] == 2){
btn5.setText("3단계[100]"); 
}if(Astep[0] > 2){
btn5.setText("3단계"); 
}
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);

lay.addView(btn5); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	Window.dismiss();
	Window = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	var Window = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, ctx.getScreenWidth() / 5, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){clientMessage(e);}
	}}));
}
//Psycokinesis
function PsycokinesisWindow(){
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {
	pw=new android.widget.PopupWindow();

if(new java.io.File(dir+"P.jpg").exists()) {
var iv=new android.widget.ImageView(ctx);
var bm=new android.graphics.BitmapFactory.decodeFile(dir+"/P.jpg");
iv.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
iv.setImageBitmap(bm);
}
else {
toast("사진X");
}
iv.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	PsycokinesisMenu();
}
}));
pw.setContentView(iv);
pw.setWidth(DP * 50);
pw.setHeight(DP * 50);
pw.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
pw.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, DP * 150);
	}catch(e){clientMessage(e);}
	}}));
}
function PsycokinesisMenu() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {var spot = 1;
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("Psycokinesis");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("눈금 3개로 전방에 폭발 화살을 날립니다");
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var t3 = new android.widget.TextView(ctx);
	t3.setText("눈금 : "+stat[1]);
	t3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t3.setTextSize(15);
	t3.setGravity(android.view.Gravity.CENTER);
	lay.addView(t3);

var btn4 = new android.widget.Button(ctx); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(stat[1] >= spot){
	px=(getPlayerX());
py=(getPlayerY());
pz=(getPlayerZ());
pe=getPlayerEnt();
yaw=(getYaw());
pitch=(getPitch());
sin=-Math.sin(yaw/180*Math.PI);
cos=Math.cos(yaw/180*Math.PI);
tan=-Math.sin(pitch/180*Math.PI);
pcos=Math.cos(pitch/180*Math.PI);

p = Level.spawnMob(px+5*sin*pcos,py+5*tan,pz+5*cos*pcos,80);
setVelX(p,sin*2);
setVelY(p,tan*2);
setVelZ(p,cos*2);
	toast("사이코키네시스 시전");
	stat[1] -= 3;
	t3.setText("눈금 : "+stat[1]);
	
	}else {
		toast("눈금이 부족합니다");
	}
}
}));
btn4.setText("사용"); 
btn4.setTextColor(android.graphics.Color.BLACK);
btn4.setBackgroundDrawable(gr1);
lay.addView(btn4); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(Astep[2] == 1){
Dialog("사이코키네시스", 2);
}if(Astep[2] > 1){
PsycokinesisMenu2();
}
}
}));
if(Astep[2] == 1){
btn5.setText("2단계[50]"); 
}if(Astep[2] > 1){
btn5.setText("2단계"); 
}
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);

lay.addView(btn5); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	Window.dismiss();
	Window = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	var Window = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, 0, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){clientMessage(e);}
	}}));
}
function PsycokinesisMenu2(){
	
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {var spot = 3;
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("Magical Wind");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("눈금 3개당 5초동안 염력으로 주위 상대를 뛰웁니다");
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var t3 = new android.widget.TextView(ctx);
	t3.setText("눈금 : "+stat[1]);
	t3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t3.setTextSize(15);
	t3.setGravity(android.view.Gravity.CENTER);
	lay.addView(t3);
	var btn1 = new android.widget.Button(ctx); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(spot != 3){
	spot -= 3;
	}
	t5.setText(spot.toString());
}
}));
btn1.setText("-"); 
btn1.setTextColor(android.graphics.Color.BLACK);
btn1.setBackgroundDrawable(gr1);
lay.addView(btn1); 
var t5 = new android.widget.TextView(ctx);
	t5.setText(spot.toString());
	t5.setTextColor(android.graphics.Color.BLACK);
	t5.setTextSize(20);
	t5.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t5.setGravity(android.view.Gravity.CENTER);
	lay.addView(t5);
var btn2 = new android.widget.Button(ctx); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	spot += 3;
	t5.setText(spot.toString());
}
}));
btn2.setText("+"); 
btn2.setTextColor(android.graphics.Color.BLACK);
btn2.setBackgroundDrawable(gr1);
lay.addView(btn2); 
 
var btn4 = new android.widget.Button(ctx); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	
	if(stat[1] >= spot){
	toast("Magical Wind 시전");
	stat[1] -= spot;
	t3.setText("눈금 : "+stat[1]);
	mwc = spot/3 * 100;
	}else {
		toast("눈금이 부족합니다");
	}
}
}));
btn4.setText("사용"); 
btn4.setTextColor(android.graphics.Color.BLACK);
btn4.setBackgroundDrawable(gr1);
lay.addView(btn4); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(Astep[5] == 2){
Dialog("사이코키네시스", 0);
}if(Astep[5] > 2){
//TimePauseMenu2();
}
}
}));
if(Astep[5] == 2){
btn5.setText("3단계[100]"); 
}if(Astep[5] > 2){
btn5.setText("3단계"); 
}
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);

lay.addView(btn5); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	Window.dismiss();
	Window = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	var Window = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, ctx.getScreenWidth() / 5, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){clientMessage(e);}
	}}));

}
function LevitationWindow(){
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {
	lw=new android.widget.PopupWindow();

if(new java.io.File(dir+"L.jpg").exists()) {
var iv=new android.widget.ImageView(ctx);
var bm=new android.graphics.BitmapFactory.decodeFile(dir+"/L.jpg");
iv.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
iv.setImageBitmap(bm);
}
else {
toast("사진X");
}
iv.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	LevitationMenu();
}
}));
lw.setContentView(iv);
lw.setWidth(DP * 50);
lw.setHeight(DP * 50);
lw.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
lw.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, DP * 200);
	}catch(e){clientMessage(e);}
	}}));
}function LevitationMenu() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {var spot = 1;
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("Levitation");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("눈금 1개로 1분동안 날 수 있습니다.");
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var t3 = new android.widget.TextView(ctx);
	t3.setText("눈금 : "+stat[1]);
	t3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t3.setTextSize(15);
	t3.setGravity(android.view.Gravity.CENTER);
	lay.addView(t3);
	var btn1 = new android.widget.Button(ctx); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(spot != 1){
	spot -= 1;
	}
	t5.setText(spot.toString());
}
}));
btn1.setText("-"); 
btn1.setTextColor(android.graphics.Color.BLACK);
btn1.setBackgroundDrawable(gr1);
lay.addView(btn1); 
var t5 = new android.widget.TextView(ctx);
	t5.setText(spot.toString());
	t5.setTextColor(android.graphics.Color.BLACK);
	t5.setTextSize(20);
	t5.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t5.setGravity(android.view.Gravity.CENTER);
	lay.addView(t5);
var btn2 = new android.widget.Button(ctx); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	spot += 1;
	t5.setText(spot.toString());
}
}));
btn2.setText("+"); 
btn2.setTextColor(android.graphics.Color.BLACK);
btn2.setBackgroundDrawable(gr1);
lay.addView(btn2); 
 
var btn4 = new android.widget.Button(ctx); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(stat[1] >= spot){
	Player.setCanFly(true);
	LeCool += spot * 1200;
	toast("레비테이션 시전");
	stat[1] -= spot;
	//Entity.addEffect(getPlayerEnt(),8,spot * 1200,2,false,true);
	//Entity.addEffect(getPlayerEnt(),11,spot * 1200,4,false,true);
	t3.setText("눈금 : "+stat[1]);
	//11
	}else {
		toast("눈금이 부족합니다");
	}
}
}));
btn4.setText("사용"); 
btn4.setTextColor(android.graphics.Color.BLACK);
btn4.setBackgroundDrawable(gr1);
lay.addView(btn4); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(Astep[5] == 1){
Dialog("레비테이션", 5);
}if(Astep[5] > 1){
LevitationMenu2();
}
}
}));
if(Astep[5] == 1){
btn5.setText("2단계[50]"); 
}if(Astep[5] > 1){
btn5.setText("2단계"); 
}
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);

lay.addView(btn5); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	Window.dismiss();
	Window = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	var Window = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, 0, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){clientMessage(e);}
	}}));
}
function LevitationMenu2() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {var spot = 2;
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("Air Gravity");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("눈금 2개당 5초동안 바라보는 상대를 밀칩니다");
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var t3 = new android.widget.TextView(ctx);
	t3.setText("눈금 : "+stat[1]);
	t3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t3.setTextSize(15);
	t3.setGravity(android.view.Gravity.CENTER);
	lay.addView(t3);
	var btn1 = new android.widget.Button(ctx); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(spot != 2){
	spot -= 2;
	}
	t5.setText(spot.toString());
}
}));
btn1.setText("-"); 
btn1.setTextColor(android.graphics.Color.BLACK);
btn1.setBackgroundDrawable(gr1);
lay.addView(btn1); 
var t5 = new android.widget.TextView(ctx);
	t5.setText(spot.toString());
	t5.setTextColor(android.graphics.Color.BLACK);
	t5.setTextSize(20);
	t5.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t5.setGravity(android.view.Gravity.CENTER);
	lay.addView(t5);
var btn2 = new android.widget.Button(ctx); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	spot += 2;
	t5.setText(spot.toString());
}
}));
btn2.setText("+"); 
btn2.setTextColor(android.graphics.Color.BLACK);
btn2.setBackgroundDrawable(gr1);
lay.addView(btn2); 
 
var btn4 = new android.widget.Button(ctx); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	
	if(stat[1] >= spot){
	toast("Air Gravity 시전");
	stat[1] -= spot;
	t3.setText("눈금 : "+stat[1]);
	lvc = spot/2 * 100;
	}else {
		toast("눈금이 부족합니다");
	}
}
}));
btn4.setText("사용"); 
btn4.setTextColor(android.graphics.Color.BLACK);
btn4.setBackgroundDrawable(gr1);
lay.addView(btn4); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(Astep[5] == 2){
Dialog("레비테이션", 0);
}if(Astep[5] > 2){
//TimePauseMenu2();
}
}
}));
if(Astep[5] == 2){
btn5.setText("3단계[100]"); 
}if(Astep[5] > 2){
btn5.setText("3단계"); 
}
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);

lay.addView(btn5); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	Window.dismiss();
	Window = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	var Window = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, ctx.getScreenWidth() / 5, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){clientMessage(e);}
	}}));
}
function CloakingWindow(){
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {
	cw=new android.widget.PopupWindow();

if(new java.io.File(dir+"C.jpg").exists()) {
var iv=new android.widget.ImageView(ctx);
var bm=new android.graphics.BitmapFactory.decodeFile(dir+"/C.jpg");
iv.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
iv.setImageBitmap(bm);
}
else {
toast("사진X");
}
iv.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	CloakingMenu();
}
}));
cw.setContentView(iv);
cw.setWidth(DP * 50);
cw.setHeight(DP * 50);
cw.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
cw.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, DP * 250);
	}catch(e){clientMessage(e);}
	}}));
}
function CloakingMenu() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {var spot = 1;
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("Cloaking");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("눈금 1개로 1분 은신합니다, 클로킹 재시전시 쿨타임 존재.");
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var t3 = new android.widget.TextView(ctx);
	t3.setText("눈금 : "+stat[1]);
	t3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t3.setTextSize(15);
	t3.setGravity(android.view.Gravity.CENTER);
	lay.addView(t3);
	var btn1 = new android.widget.Button(ctx); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(spot != 1){
	spot -= 1;
	}
	t5.setText(spot.toString());
}
}));
btn1.setText("-"); 
btn1.setTextColor(android.graphics.Color.BLACK);
btn1.setBackgroundDrawable(gr1);
lay.addView(btn1); 
var t5 = new android.widget.TextView(ctx);
	t5.setText(spot.toString());
	t5.setTextColor(android.graphics.Color.BLACK);
	t5.setTextSize(20);
	t5.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t5.setGravity(android.view.Gravity.CENTER);
	lay.addView(t5);
var btn2 = new android.widget.Button(ctx); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	spot += 1;
	t5.setText(spot.toString());
}
}));
btn2.setText("+"); 
btn2.setTextColor(android.graphics.Color.BLACK);
btn2.setBackgroundDrawable(gr1);
lay.addView(btn2); 
 
var btn4 = new android.widget.Button(ctx); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(stat[1] >= spot && clC == -1){
	Entity.addEffect(getPlayerEnt(), 14, spot*1200, 2, false, false);
	toast("클로킹 시전");
	clS = spot * 1200;
	clC = spot * 1200 + 1200;
	stat[1] -= spot;
	t3.setText("눈금 : "+stat[1]);
	
	}else {
		toast("눈금이 부족하거나 쿨타임이 끝나지 않았습니다");
	}
}
}));
btn4.setText("사용"); 
btn4.setTextColor(android.graphics.Color.BLACK);
btn4.setBackgroundDrawable(gr1);
lay.addView(btn4); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(Astep[3] == 1){
Dialog("클로킹", 3);
}if(Astep[3] > 1){
CloakingMenu2();
}
}
}));
if(Astep[2] == 1){
btn5.setText("2단계[50]"); 
}if(Astep[2] > 1){
btn5.setText("2단계"); 
}
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);

lay.addView(btn5); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	Window.dismiss();
	Window = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	var Window = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, 0, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){clientMessage(e);}
	}}));
}
function CloakingMenu2() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {var spot = 1;
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("Dark Step");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("눈금 1개로 바라보는 가장 가까운 상대에게로 돌진합니다");
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var t3 = new android.widget.TextView(ctx);
	t3.setText("눈금 : "+stat[1]);
	t3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t3.setTextSize(15);
	t3.setGravity(android.view.Gravity.CENTER);
	lay.addView(t3);

var btn4 = new android.widget.Button(ctx); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	
	if(stat[1] >= spot){
	toast("Dark Step 시전");
	
	var ar = Entity.getNearestEnt(getPlayerEnt());
	var arrow = getPlayerEnt();
	for(var a in ar){
		
		if(Entity.isView(ar[a], getPlayerEnt())){
			var mob = ar[a];
	var x=Math.floor(Entity.getX(mob))-Math.floor(Entity.getX(arrow));
var y=Math.floor(Entity.getY(mob))-Math.floor(Entity.getY(arrow));
var z=Math.floor(Entity.getZ(mob))-Math.floor(Entity.getZ(arrow));
s=Math.sqrt(Math.abs(x*x+y*y+z*z));
setVelX(arrow,x/s*4);
setVelY(arrow,y/s*4);
setVelZ(arrow,z/s*4); 
stat[1] -= spot;
target = mob;
return;
}
}
	t3.setText("눈금 : "+stat[1]);
	
	}else {
		toast("눈금이 부족합니다");
	}
}
}));
btn4.setText("사용"); 
btn4.setTextColor(android.graphics.Color.BLACK);
btn4.setBackgroundDrawable(gr1);
lay.addView(btn4); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(Astep[5] == 2){
Dialog("레비테이션", 0);
}if(Astep[5] > 2){
//TimePauseMenu2();
}
}
}));
if(Astep[5] == 2){
btn5.setText("3단계[100]"); 
}if(Astep[5] > 2){
btn5.setText("3단계"); 
}
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);

lay.addView(btn5); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	Window.dismiss();
	Window = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	var Window = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, ctx.getScreenWidth() / 5, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){clientMessage(e);}
	}}));
}
function ClairvoyanceWindow(){
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {
	cvw=new android.widget.PopupWindow();

if(new java.io.File(dir+"CV.jpg").exists()) {
var iv=new android.widget.ImageView(ctx);
var bm=new android.graphics.BitmapFactory.decodeFile(dir+"/CV.jpg");
iv.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
iv.setImageBitmap(bm);
}
else {
toast("사진X");
}
iv.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	ClairvoyanceMenu();
}
}));
cvw.setContentView(iv);
cvw.setWidth(DP * 50);
cvw.setHeight(DP * 50);
cvw.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
cvw.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, DP * 300);
	}catch(e){clientMessage(e);}
	}}));
}
function ClairvoyanceMenu() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {var spot = 1;
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("Clair Voyance");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("눈금 1개로 1분동안 적을 꽤뚫어봐 치명타률이 극히 증가합니다");
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var t3 = new android.widget.TextView(ctx);
	t3.setText("눈금 : "+stat[1]);
	t3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t3.setTextSize(15);
	t3.setGravity(android.view.Gravity.CENTER);
	lay.addView(t3);
	var btn1 = new android.widget.Button(ctx); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(spot != 1){
	spot -= 1;
	}
	t5.setText(spot.toString());
}
}));
btn1.setText("-"); 
btn1.setTextColor(android.graphics.Color.BLACK);
btn1.setBackgroundDrawable(gr1);
lay.addView(btn1); 
var t5 = new android.widget.TextView(ctx);
	t5.setText(spot.toString());
	t5.setTextColor(android.graphics.Color.BLACK);
	t5.setTextSize(20);
	t5.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t5.setGravity(android.view.Gravity.CENTER);
	lay.addView(t5);
var btn2 = new android.widget.Button(ctx); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	spot += 1;
	t5.setText(spot.toString());
}
}));
btn2.setText("+"); 
btn2.setTextColor(android.graphics.Color.BLACK);
btn2.setBackgroundDrawable(gr1);
lay.addView(btn2); 
 
var btn4 = new android.widget.Button(ctx); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(stat[1] >= spot){
	
	toast("클레어 보이언트 시전");
	CvC = spot * 1200;
lp += 20;
	stat[1] -= spot;
	t3.setText("눈금 : "+stat[1]);
	
	}else {
		toast("눈금이 부족합니다");
	}
}
}));
btn4.setText("사용"); 
btn4.setTextColor(android.graphics.Color.BLACK);
btn4.setBackgroundDrawable(gr1);
lay.addView(btn4); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(Astep[4] == 1){
Dialog("클레어 보이언트", 4);
}if(Astep[4] > 1){
ClairvoyanceMenu2();
}
}
}));
if(Astep[4] == 1){
btn5.setText("2단계[50]"); 
}if(Astep[4] > 1){
btn5.setText("2단계"); 
}
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);

lay.addView(btn5); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	Window.dismiss();
	Window = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	var Window = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, 0, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){clientMessage(e);}
	}}));
}
function ClairvoyanceMenu2() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {var spot = 2;
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("Brain Control");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("눈금 2개로 1분동안 적들의 위치를 파악합니다");
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var t3 = new android.widget.TextView(ctx);
	t3.setText("눈금 : "+stat[1]);
	t3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t3.setTextSize(15);
	t3.setGravity(android.view.Gravity.CENTER);
	lay.addView(t3);
	var btn1 = new android.widget.Button(ctx); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(spot != 2){
	spot -= 2;
	}
	t5.setText(spot.toString());
}
}));
btn1.setText("-"); 
btn1.setTextColor(android.graphics.Color.BLACK);
btn1.setBackgroundDrawable(gr1);
lay.addView(btn1); 
var t5 = new android.widget.TextView(ctx);
	t5.setText(spot.toString());
	t5.setTextColor(android.graphics.Color.BLACK);
	t5.setTextSize(20);
	t5.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t5.setGravity(android.view.Gravity.CENTER);
	lay.addView(t5);
var btn2 = new android.widget.Button(ctx); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	spot += 2;
	t5.setText(spot.toString());
}
}));
btn2.setText("+"); 
btn2.setTextColor(android.graphics.Color.BLACK);
btn2.setBackgroundDrawable(gr1);
lay.addView(btn2); 
 
var btn4 = new android.widget.Button(ctx); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	
	if(stat[1] >= spot){
		zC = [];
		cC = [];
		sC = [];
		skC = [];
	toast("Brain Control 시전");
	cvc = spot/2 * 1200;
	stat[1] -= spot;
	t3.setText("눈금 : "+stat[1]);
	VoyanceW();
	}else {
		toast("눈금이 부족합니다");
	}
}
}));
btn4.setText("사용"); 
btn4.setTextColor(android.graphics.Color.BLACK);
btn4.setBackgroundDrawable(gr1);
lay.addView(btn4); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(Astep[5] == 2){
Dialog("레비테이션", 0);
}if(Astep[5] > 2){
//TimePauseMenu2();
}
}
}));
if(Astep[5] == 2){
btn5.setText("3단계[100]"); 
}if(Astep[5] > 2){
btn5.setText("3단계"); 
}
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);

lay.addView(btn5); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	Window.dismiss();
	Window = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	var Window = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, ctx.getScreenWidth() / 5, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){clientMessage(e);}
	}}));
}
function questInfo() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {
	questT = new android.widget.TextView(ctx);
	questT.setText("");
	questW = new android.widget.PopupWindow(questT, -2, -2); 
questW.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.LEFT, DP * 20, DP * 75);
questW.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.LTGRAY));
	}catch(e){clientMessage(e);}
	}}));
}
function mainMenu() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("Menu");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
		var t5 = new android.widget.TextView(ctx);
	t5.setText("정품 인증 "+codeName);
	t5.setTextColor(android.graphics.Color.BLACK);
	t5.setTextSize(25);
	
	t5.setGravity(android.view.Gravity.CENTER);
	lay.addView(t5);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("Rank : "+stat[0]);
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var btn1 = new android.widget.Button(ctx); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	statW();
}
}));
btn1.setText("Stat"); 
btn1.setTextColor(android.graphics.Color.BLACK);
btn1.setBackgroundDrawable(gr1);
lay.addView(btn1); 
var btn2 = new android.widget.Button(ctx); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	
}
}));
btn2.setText("Shop"); 
btn2.setTextColor(android.graphics.Color.BLACK);
btn2.setBackgroundDrawable(gr1);
lay.addView(btn2); 
var btn4 = new android.widget.Button(ctx); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	writeFile(dir + "stat.txt", stat[0]+","+stat[1]+","+stat[2]+","+stat[3]+","+stat[4]+","+stat[5]+","+sp+","+fp+","+dp+","+lp);
	writeFile(dir + "arank.txt", Arank[0]+","+Arank[1]+","+Arank[2]+","+Arank[3]+","+Arank[4]+","+Arank[5]);
	writeFile(dir + "astep.txt", Astep[0]+","+Astep[1]+","+Astep[2]+","+Astep[3]+","+Astep[4]+","+Astep[5]);
	for(var a in quest){
		if(a == 0){
			writeFile(dir + "option.txt", quest[a].done);
		}else {
			writeFile(dir + "option.txt", readFile(dir + "option.txt")+","+quest[a].done);
		}
	}
	if(Quest.doing){
		writeFile(dir + "option2.txt", "true");
	}if(!Quest.doing){
		writeFile(dir + "option2.txt", "false");
	}
	npc("X", "저장 완료! 이제 나가두됭 헤헤\n불러오기는 맵 입장시 자동으로 될꺼얌", "알앗응", "사랑해>_<", "", "", "", trash, trash, null, null, null);
}
}));
btn4.setText("Save"); 
btn4.setTextColor(android.graphics.Color.BLACK);
btn4.setBackgroundDrawable(gr1);
lay.addView(btn4); 
Line(lay, android.graphics.Color.parseColor("#FF00EC"));
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	CouponW();
}
}));
btn5.setText("Coupon"); 
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);

lay.addView(btn5); 
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	menu.dismiss();
	menu = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	menu = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, 0, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){
		clientMessage(e);
	}
	}}));
}
function CouponW(){
	
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var t2 = new android.widget.TextView(ctx);
	t2.setText("쿠폰 형식 : AAAA-AAAA-AAAA-AAAA, 쓸때는 - 빼고사용\n대소문자 구별 O");
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	
	lay.addView(t2);

	var e1 = new android.widget.EditText(ctx);
	e1.setHint("4자리");
	e1.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
//	e1.setPassword(true);
	lay.addView(e1);

	var e2 = new android.widget.EditText(ctx);
	e2.setHint("4자리");
	e2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	lay.addView(e2);
	var e3 = new android.widget.EditText(ctx);
	e3.setHint("4자리");
	e3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	lay.addView(e3);
	var e4 = new android.widget.EditText(ctx);
	e4.setHint("4자리");
	e4.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	lay.addView(e4);
	new android.app.AlertDialog.Builder(ctx)

.setTitle("Coupon")
.setView(lay)
.setPositiveButton("확인",new android.content.DialogInterface.OnClickListener({onClick:function(){
if(e1.getText() == ""){
		return;
	}
	
	var cplist = cplisti.split("\n");
	
	for(var a in cplist){
		 var s1 = cplist[a].split(",");
		
			var s2 = s1[0].split("-");
		if(s2[0] == e1.getText().toString() && s2[1] == e2.getText().toString() && s2[2] == e3.getText().toString() && s2[3] == e4.getText().toString()){
			
			var s3 = readFile(dir + "used.txt").toString().split("\n");
			for(var b in s3){
				
				var s4 = s3[b].split("-");
				
				
				if(s4[0] == e1.getText().toString() && s4[1] == e2.getText().toString() && s4[2] == e3.getText().toString() && s4[3] == e4.getText().toString()){
					toast("사용한 쿠폰입니다");
					return;
					}
				if(s4[0] != e1.getText().toString() && s4[1] != e2.getText().toString() && s4[2] != e3.getText().toString() && s4[3] != e4.getText().toString() && parseInt(b)+1 == parseInt(s3.length)){
					writeFile(dir + "used.txt", readFile(dir + "used.txt").toString()+"\n"+e1.getText().toString()+"-"+e2.getText().toString()+"-"+e3.getText().toString()+"-"+e4.getText().toString());
					toast("쿠폰 등록 완료");
					toast(s1[1]+"랭크 다이스 "+s1[2]+"개 획득");
					if(s1[1] == "B"){
						addItemInventory(461, s1[2]);
					}if(s1[1] == "A"){
						addItemInventory(462, s1[2]);
					}return;
				}
			}
		}
	
}
}}))
.create().show();

	}catch(e){clientMessage(e);}
	}}));

}

function statW() {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {
	var lay = new android.widget.LinearLayout(ctx);
	lay.setOrientation(1);
	lay.setGravity(android.view.Gravity.CENTER|android.view.Gravity.TOP); 
	lay.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 5, ctx.getScreenHeight())); 
	var gr1 = new android.graphics.drawable.GradientDrawable();
gr1.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
gr1.setColors([android.graphics.Color.WHITE,android.graphics.Color.WHITE]);
//gr1.setCornerRadii([50,50,50,50,50,50,50,50]);
gr1.setStroke(DP*5,android.graphics.Color.parseColor("#FF00EC"));
	var t1 = new android.widget.TextView(ctx);
	t1.setText("Stat");
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setTextSize(25);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setGravity(android.view.Gravity.CENTER);
	lay.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText("Spot : "+stat[1]);
	t2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
	t2.setTextSize(20);
	t2.setGravity(android.view.Gravity.CENTER);
	lay.addView(t2);
	var btn1 = new android.widget.Button(ctx); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(stat[1] == 0 || stat[2] == 200){
		toast("눈금이 부족하거나 스텟이 가득 찼습니다");
	}else {
		stat[1] -= 1;
		stat[2] += 1;
		fp += 0.05;
		t2.setText("Spot : "+stat[1]);
		btn1.setText("근력 : " +stat[2]); 
		if(stat[2] == 200) {
			toast("스텟이 가득 찼습니다");
		}
	}
}
}));
btn1.setText("근력 : " +stat[2]); 
btn1.setTextColor(android.graphics.Color.BLACK);
btn1.setBackgroundDrawable(gr1);
lay.addView(btn1); 
var btn2 = new android.widget.Button(ctx); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(stat[1] == 0 || stat[3] == 200){
		toast("눈금이 부족하거나 스텟이 가득 찼습니다");
	}else {
		stat[1] -= 1;
		stat[3] += 1;
		dp += 0.1;
		t2.setText("Spot : "+stat[1]);
		btn2.setText("맷집 : " +stat[3]); 
		if(stat[3] == 200) {
			toast("스텟이 가득 찼습니다");
			}
		}
}
}));
btn2.setText("맷집 : " +stat[3]); 
btn2.setTextColor(android.graphics.Color.BLACK);
btn2.setBackgroundDrawable(gr1);
lay.addView(btn2); 
var btn4 = new android.widget.Button(ctx); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(stat[1] == 0 || stat[4] == 200){
		toast("눈금이 부족하거나 스텟이 가득 찼습니다");
	}else {
		stat[1] -= 1;
		stat[4] += 1;
		t2.setText("Spot : "+stat[1]);
		btn4.setText("민첩 : " +stat[4]); 
		sp += 0.005;
		if(stat[4] == 200) {
			toast("스텟이 가득 찼습니다");
			}
		}
}
}));
btn4.setText("민첩 : " +stat[4]); 
btn4.setTextColor(android.graphics.Color.BLACK);
btn4.setBackgroundDrawable(gr1);
lay.addView(btn4); 
var btn5 = new android.widget.Button(ctx); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(stat[1] == 0 || stat[5] == 200){
		toast("눈금이 부족하거나 스텟이 가득 찼습니다");
	}else {
		stat[1] -= 1;
		stat[5] += 1;
		lp += 0.1;
		t2.setText("Spot : "+stat[1]);
		btn5.setText("운 : " +stat[5]); 
		
		if(stat[5] == 200) {
			toast("스텟이 가득 찼습니다");
			}
		}
}
}));
btn5.setText("운 : " +stat[5]); 
btn5.setTextColor(android.graphics.Color.BLACK);
btn5.setBackgroundDrawable(gr1);
lay.addView(btn5); 
var btn3 = new android.widget.Button(ctx); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	sW.dismiss();
	sW = null;
}
}));
btn3.setText("Exit"); 
btn3.setTextColor(android.graphics.Color.BLACK);
btn3.setBackgroundDrawable(gr1);

lay.addView(btn3); 
var scr = new android.widget.ScrollView(ctx);
scr.addView(lay);
	var sW = new android.widget.PopupWindow(scr, ctx.getScreenWidth() / 5, ctx.getScreenHeight()); 
sW.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT, 0, 0); 
	lay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
	}catch(e){
		clientMessage(e);
	}
	}}));
}
function npc(name, thing, n1, n2, n3, n4, n5, d1, d2, d3, d4, d5) {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {
	var lay1 = new android.widget.LinearLayout(ctx);
	lay1.setOrientation(0);
	lay1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth(), ctx.getScreenHeight())); 
	var lay2 = new android.widget.LinearLayout(ctx);
	lay2.setOrientation(1);
	lay2.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() * 0.75, ctx.getScreenHeight())); 
	lay2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
	var t1 = new android.widget.TextView(ctx);
	t1.setText(name);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() * 0.75, ctx.getScreenHeight() / 10)); 
	t1.setTextSize(25);
	lay2.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText(thing);
	t2.setTextSize(25);

	//t2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#DCDCDC")));
	t2.setTextColor(android.graphics.Color.BLACK);
	var aaa = ctx.getScreenHeight() / 10;
//	t2.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() * 0.75, ctx.getScreenHeight() - aaa)); 
	var scr = new android.widget.ScrollView(ctx);
	//scr.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() * 0.75, ctx.getScreenHeight() - aaa)); 
	scr.addView(t2);
	lay2.addView(scr);
	lay1.addView(lay2);
	
	var lay3 = new android.widget.LinearLayout(ctx);
	lay3.setOrientation(1);
	lay3.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 4, ctx.getScreenHeight())); 
		lay3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#C2C2C1")));
	var btn1 = new android.widget.Button(ctx); 
	
btn1.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(ctx.getScreenWidth() / 4, ctx.getScreenHeight() / 5)); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	if(n1 != ""){qB.dismiss();}
	
	if(d1 != null){d1();}

}
}));
btn1.setText(n1); 
btn1.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
lay3.addView(btn1); 
var btn2 = new android.widget.Button(ctx); 

btn2.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(ctx.getScreenWidth() / 4, ctx.getScreenHeight() / 5)); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {if(n2 != ""){qB.dismiss();}
if(d2 != null){d2();}
}
}));
btn2.setText(n2); 
btn2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
lay3.addView(btn2); 
var btn3 = new android.widget.Button(ctx); 
btn3.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(ctx.getScreenWidth() / 4, ctx.getScreenHeight() / 5)); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {if(n3 != ""){qB.dismiss();}
if(d3 != null){d3();}
}
}));
btn3.setText(n3); 
btn3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
lay3.addView(btn3); 
var btn4 = new android.widget.Button(ctx); 
btn4.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(ctx.getScreenWidth() / 4, ctx.getScreenHeight() / 5)); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {if(n4 != ""){qB.dismiss();}
if(d4 != null){d4();}
}
}));
btn4.setText(n4); 
btn4.setTextColor(android.graphics.Color.parseColor("#FF00EC"));

lay3.addView(btn4); 
var btn5 = new android.widget.Button(ctx); 
btn5.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(ctx.getScreenWidth() / 4, ctx.getScreenHeight() / 5)); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
if(n5 != ""){qB.dismiss();}
if(d5 != null){d5();}
}
}));
btn5.setText(n5); 
btn5.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
lay3.addView(btn5); 
lay1.addView(lay3);
var qB = new android.widget.PopupWindow(lay1, ctx.getScreenWidth(), ctx.getScreenHeight()); 
qB.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0); 
}catch(e){clientMessage(e);}
}}));
}

function questNPC(name, n) {
	ctx.runOnUiThread(new java.lang.Runnable({
run: function () { 
try {
	var lay1 = new android.widget.LinearLayout(ctx);
	lay1.setOrientation(0);
	lay1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth(), ctx.getScreenHeight())); 
	var lay2 = new android.widget.LinearLayout(ctx);
	lay2.setOrientation(1);
	lay2.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() * 0.75, ctx.getScreenHeight())); 
	lay2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FFFFFF")));
	var t1 = new android.widget.TextView(ctx);
	t1.setText(name);
	t1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#FF00EC")));
	t1.setTextColor(android.graphics.Color.BLACK);
	t1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() * 0.75, ctx.getScreenHeight() / 10)); 
	t1.setTextSize(25);
	lay2.addView(t1);
	var t2 = new android.widget.TextView(ctx);
	t2.setText(quest[n].thing);
	t2.setTextSize(25);

	
	t2.setTextColor(android.graphics.Color.BLACK);
	var aaa = ctx.getScreenHeight() / 10;

	var scr = new android.widget.ScrollView(ctx);
	
	scr.addView(t2);
	lay2.addView(scr);
	lay1.addView(lay2);
	
	var lay3 = new android.widget.LinearLayout(ctx);
	lay3.setOrientation(1);
	lay3.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth() / 4, ctx.getScreenHeight())); 
		lay3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#C2C2C1")));
	var btn1 = new android.widget.Button(ctx); 
	
btn1.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(ctx.getScreenWidth() / 4, ctx.getScreenHeight() / 5)); 
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
quest[n].done = "doing";
Quest.doing = true;
qB.dismiss();
qB = null;
}
}));
btn1.setText("수락"); 
btn1.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
lay3.addView(btn1); 
var btn2 = new android.widget.Button(ctx); 

btn2.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(ctx.getScreenWidth() / 4, ctx.getScreenHeight() / 5)); 
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
	Quest.cool= 1200;
qB.dismiss();
qB = null;
}
}));
btn2.setText("거절"); 
btn2.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
lay3.addView(btn2); 
var btn3 = new android.widget.Button(ctx); 
btn3.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(ctx.getScreenWidth() / 4, ctx.getScreenHeight() / 5)); 
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
}
}));
btn3.setText(""); 
btn3.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
lay3.addView(btn3); 
var btn4 = new android.widget.Button(ctx); 
btn4.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(ctx.getScreenWidth() / 4, ctx.getScreenHeight() / 5)); 
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {
}
}));
btn4.setText(""); 
btn4.setTextColor(android.graphics.Color.parseColor("#FF00EC"));

lay3.addView(btn4); 
var btn5 = new android.widget.Button(ctx); 
btn5.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(ctx.getScreenWidth() / 4, ctx.getScreenHeight() / 5)); 
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick: function () {

}
}));
btn5.setText(""); 
btn5.setTextColor(android.graphics.Color.parseColor("#FF00EC"));
lay3.addView(btn5); 
lay1.addView(lay3);
var qB = new android.widget.PopupWindow(lay1, ctx.getScreenWidth(), ctx.getScreenHeight()); 
qB.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0); 
}catch(e){clientMessage(e);}
}}));
}

function vibrate(amt) {
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(amt);
}catch(err){
print(err);
}
}}));
}
function gia(itemId,itemData)
{
var amount=0;
for(var i=9;i<=44;i++){
if(Player.getInventorySlot(i)==itemId&&Player.getInventorySlotData(i)==itemData){
amount+=Player.getInventorySlotCount(i);
}
}return amount;
}
Entity.getAllMob = function(){//모든 동물 & 몬스터 반환.

var All = Entity.getAll();
var Arr = All.filter(function(ent){
return Entity.getEntityTypeId(ent) > 0 && Entity.getEntityTypeId(ent) < 45;
});

return Arr;
};
Entity.getDst = function(ent, ent2) { 
    var startX = Entity.getX(ent),startY = Entity.getY(ent),startZ = Entity.getZ(ent);
    var endX = Entity.getX(ent2),endY = Entity.getY(ent2),endZ = Entity.getZ(ent2);
    return Math.sqrt(Math.pow(startX - endX,2) + Math.pow(startZ - endZ,2) + Math.pow(startY - endY,2));
};
Entity.getNearByEnt = function(ent,Size){//가까이에 있는 엔티티 배열로 반환.
    var Arr = Entity.getAllMob();
    var Re = Arr.filter(function(i){
        return Entity.getDst(ent,i) < Size;
    });
    return Re;
};

Entity.getNearestEnt = function(ent){//거리순으로 나열.Arr[0] 은 가장 가까운 엔티티
    var Arr = Entity.getAllMob();
    Arr.sort(function(a, b){
        var A = Entity.getDst(a, ent);
        var B = Entity.getDst(b, ent);
        return A - B;
    });
    return Arr;
};
Entity.isView = function(ent, ent2){//ent가 ent2시야에 있을시 true 반환.
    var x = Entity.getX(ent);
    var y = Entity.getY(ent);
    var z = Entity.getZ(ent);
    
    var ex = Entity.getX(ent2);
    var ey = Entity.getY(ent2);
    var ez = Entity.getZ(ent2);
    var sin = -Math.sin(Entity.getYaw(ent2) / 180 * Math.PI);
    var cos = Math.cos(Entity.getYaw(ent2) / 180 * Math.PI);
    var tan = -Math.sin(Entity.getPitch(ent2) / 180 * Math.PI);
    
    for(var i = 0; i < 15;i += 0.5){
        var X = ex + sin * i;
        var Y = ey + tan * i;
        var Z = ez + cos * i;
        if(Level.getDst(x, y, z, X, Y, Z) < i){
            return true;
        }
    }
    return false;
};
Level.getDst = function(x, y, z, x2, y2, z2) {
    return Math.sqrt(Math.pow(x - x2,2)+Math.pow(z - z2,2)+Math.pow(y - y2,2));
};/*
function getMaxHealth(ent)
{
var typeId = Entity.getEntityTypeId(ent);
//플레이어면 체력 20 리턴(플레이어를 소환할순 없으니...)

if(typeId == 0)

return 20;

var health;
var tempEnt = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ, typeId);
health = Entity.getHealth(tempEnt);
Entity.remove(tempEnt);
return health;
}

*/
function downFile(url,path,fileName)
{
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread( new java.lang.Runnable( {run: function(){
try{
var uri = new android.net.Uri.parse( url )
var request = new android.app.DownloadManager.Request( uri );
request.setTitle( fileName );
request.setDestinationInExternalPublicDir( path,fileName );
ctx.getSystemService( android.content.Context.DOWNLOAD_SERVICE ).enqueue( request );
}catch( e ){clientMessage( e )}
}} ) );
}
function removeEntity( type ) {

var remove = function( ent ) {
if( type!=null ){
if( Entity.getEntityTypeId( ent )==type&&ent!=getPlayerEnt() )
Entity.remove( ent );
} else if( type==null ) {
if( ent!=getPlayerEnt() )
Entity.remove( ent );
}
return 0;
};

var entities = Entity.getAll();
entities.forEach( remove );
}
function Line(layout, color){
	var t = new android.widget.TextView(ctx);
	t.setText("");
	t.setTextSize(3);
	layout.addView(t);
	var tt = new android.widget.TextView(ctx);
	tt.setText("");
	tt.setTextSize(5);
		tt.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(color));
	layout.addView(tt);
	
	var ttt = new android.widget.TextView(ctx);
	ttt.setText("");
	ttt.setTextSize(3);
	layout.addView(ttt);

}
function newLevel() {
	var nameL = readURL("https://raw.githubusercontent.com/acsiper/Dice/master/PlayList").toString();
	
	var nameS = nameL.split(",");
	var verL = readURL("https://raw.githubusercontent.com/acsiper/Dice/master/Version").toString();
	var worL = readURL("https://raw.githubusercontent.com/acsiper/Dice/master/Working").toString();
	cplisti = readURL("https://raw.githubusercontent.com/acsiper/Dice/master/Coupon").toString();
	var nL = nameS.length;
	for(var a in nameS){
		if(Player.getName(getPlayerEnt()) == nameS[a] && worL != "off"){
			toast("인증 성공");
			인증 = true;
		}
		
	}
	if(worL == "off"){
		ctx.runOnUiThread( new java.lang.Runnable({
run: function(){
try{
new android.app.AlertDialog.Builder(ctx)

.setTitle("스크립트 점검중..!")
.setMessage("나중에 다시 시도해 주세요...")
.setPositiveButton("확인",new android.content.DialogInterface.OnClickListener({onClick:function(){
인증=false;
return;
}}))
.create().show();
}catch(e){
clientMessage(e);
}
}}));
	}
	if(!인증){
		toast("복돌러 꿰엑");
		return;
	}
	if(verL != Ver){
				ctx.runOnUiThread( new java.lang.Runnable({
run: function(){
try{
new android.app.AlertDialog.Builder(ctx)

.setTitle("최신버젼 발견")
.setMessage("확인 누를 시 신버젼 다운로드")
.setPositiveButton("확인",new android.content.DialogInterface.OnClickListener({onClick:function(){
	var load = readURL("https://raw.githubusercontent.com/acsiper/Dice/master/Link").toString();
downFile(load, "/Download/", "Dice Script_"+verL);
}}))
.create().show();
}catch(e){
clientMessage(e);
}
}}));
	}
	if(Level.getGameMode() == 1){
		인증 = false;
		toast("크리에이트브모드에서 사용 불가");
		return;
	}
	createWindow();
	questInfo();
	loadCool = 5;
	
	if(tutorial){
		if(tuton == 0){
		npc("X", "칭구야 안녕!!!\n나는 X라고 한당다. 너랑 놀고시퍼 헤헤", "흠", "", "", "", "", tuSet, null, null, null, null);
		tuton = 1;
		Quest.cool = 1200;
		}
	}
	
}