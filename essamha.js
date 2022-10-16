const {readFileSync, promises: fsPromises} = require('fs');
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);
  return arr;
}
///////////////////////////////////////////////////
function pointeur(first,last,arr,ligne) {
    let str = '';

for (let i =first; i < last+1; i++) {
  str = str + arr[ligne][i];
}
return str;
  }
///////////////////////////////////////////////////
arr=syncReadFile('./nada.txt');
var L_Type_Enreg0=new Array();
var N_Identif_Transfert0 =new Array();
var L_filler0=new Array();
var L_Cat0=new Array();

var L_Type_Enreg1=new Array();
var N_Num_Affilie1=new Array();
var L_Période1=new Array();
var L_Raison_Sociale1=new Array();
var L_Activité1=new Array();
var L_Adresse1=new Array();
var L_Ville1=new Array();
var C_Code_Postal1=new Array();
var C_Code_Agence1=new Array();
var D_Date_Emission1=new Array();
var D_Date_Exig1=new Array();


var L_Type_Enreg2=new Array();
var N_Num_Affilie2=new Array();
var L_Période2=new Array();
var N_Num_Assure2=new Array();
var L_Nom_Prenom2=new Array();
var N_Enfants2=new Array();
var N_AF_A_Payer2=new Array();
var N_AF_A_Deduire2=new Array();
var N_AF_Net_A_Payer2=new Array();
var N_AF_A_Reverser2=new Array();
var N_Jours_Declares2=new Array();
var N_Salaire_Reel2=new Array();
var N_Salaire_Plaf2=new Array();
var L_Situation2=new Array();
var S_Ctr2=new Array();
var L_filler2=new Array();


var L_Type_Enreg3=new Array();
var N_Num_Affilie3=new Array();
var L_Période3=new Array();
var N_Nbr_Salaries3=new Array();
var N_T_Enfants3=new Array();
var N_T_AF_A_Payer3=new Array();
var N_T_AF_A_Deduire3=new Array();
var N_T_AF_Net_A_Payer3=new Array();
var N_T_Num_Imma3=new Array();
var N_T_AF_A_Reverser3=new Array();
var N_T_Jours_Declares3=new Array();
var N_T_Salaire_Reel3=new Array();
var N_T_Salaire_Plaf3=new Array();
var N_T_Ctr3=new Array();
var L_filler3=new Array();




var L_Type_Enreg4=new Array();
var N_Num_Affilie4=new Array();
var L_Période4=new Array();
var N_Num_Assure4=new Array();
var L_Nom_Prenom4=new Array();
var L_Num_CIN4 =new Array();
var N_Nbr_Jours4=new Array();
var N_Sal_Reel4=new Array();
var N_Sal_Plaf4=new Array();
var S_Ctr4=new Array();
var L_filler4=new Array();


var L_Type_Enreg5=new Array();
var N_Num_Affilie5=new Array();
var L_Période5=new Array();
var N_Nbr_Salaries5=new Array();
var N_T_Num_Imma5=new Array();
var N_T_Jours_Declares5=new Array();
var N_T_Salaire_Reel5=new Array();
var N_T_Salaire_Plaf5=new Array();
var N_T_Ctr5=new Array();
var L_filler5=new Array();


var L_Type_Enreg6=new Array();
var N_Num_Affilie6=new Array();
var L_Période6=new Array();
var N_Nbr_Salaries6=new Array();
var N_T_Num_Imma6=new Array();
var N_T_Jours_Declares6=new Array();
var N_T_Salaire_Reel6=new Array();
var N_T_Salaire_Plaf6=new Array();
var N_T_Ctr6=new Array();
var L_filler6=new Array();



/////////////////////////////////////////////
let str = arr
for (let j = 0; j < arr.length; j++) {
  

 indice=str[j][0]+str[j][1]+str[j][2]
 switch (indice) {
     case 'B00':
        
        L_Type_Enreg0.push(pointeur(0,2,arr,j));
        N_Identif_Transfert0.push(pointeur(3,16,arr,j));
        L_Cat0.push(pointeur(17,18,arr,j));
        L_filler0.push(pointeur(19,259,arr,j));
        break;
     case 'B01':
           
          L_Type_Enreg1.push(pointeur(0,2,arr,j));
          N_Num_Affilie1.push(pointeur(3,9,arr,j));
          L_Période1.push(pointeur(10,15,arr,j));
          L_Raison_Sociale1.push(pointeur(16,55,arr,j));
          L_Activité1.push(pointeur(56,95,arr,j));
          L_Adresse1.push(pointeur(96,215,arr,j));
          L_Ville1.push(pointeur(216,235,arr,j));
          C_Code_Postal1.push(pointeur(236,241,arr,j));
          C_Code_Agence1.push(pointeur(242,243,arr,j));
          D_Date_Emission1.push(pointeur(244,251,arr,j));
          D_Date_Exig1.push(pointeur(252,259,arr,j));
          break;
     case 'B02':
           
          L_Type_Enreg2.push(pointeur(0,2,arr,j));
          N_Num_Affilie2.push(pointeur(3,9,arr,j));
          L_Période2.push(pointeur(10,15,arr,j));
          N_Num_Assure2.push(pointeur(16,24,arr,j));
          L_Nom_Prenom2.push(pointeur(25,84,arr,j));
          N_Enfants2.push(pointeur(85,86,arr,j));
          N_AF_A_Payer2.push(pointeur(87,92,arr,j));
          N_AF_A_Deduire2.push(pointeur(93,98,arr,j));
          N_AF_Net_A_Payer2.push(pointeur(99,104,arr,j));
          N_AF_A_Reverser2.push(pointeur(105,110,arr,j));
          N_Jours_Declares2.push(pointeur(111,112,arr,j));
          N_Salaire_Reel2.push(pointeur(113,125,arr,j));
          N_Salaire_Plaf2.push(pointeur(126,134,arr,j));
          L_Situation2.push(pointeur(135,136,arr,j));
          S_Ctr2.push(pointeur(137,154,arr,j));/////////
          L_filler2.push(pointeur(155,259,arr,j));
          break;
     case 'B03':
          
          L_Type_Enreg3.push(pointeur(0,2,arr,j));
          N_Num_Affilie3.push(pointeur(3,9,arr,j));
          L_Période3.push(pointeur(10,15,arr,j));
          N_Nbr_Salaries3.push(pointeur(16,24,arr,j));
          N_T_Enfants3.push(pointeur(25,84,arr,j));
          N_T_AF_A_Payer3.push(pointeur(85,86,arr,j));
          N_T_AF_A_Deduire3.push(pointeur(87,92,arr,j));
          N_T_AF_Net_A_Payer3.push(pointeur(93,98,arr,j));
          N_T_Num_Imma3.push(pointeur(99,104,arr,j));
          N_T_AF_A_Reverser3.push(pointeur(105,110,arr,j));
          N_T_Jours_Declares3.push(pointeur(111,112,arr,j));
          N_T_Salaire_Reel3.push(pointeur(113,125,arr,j));
          N_T_Salaire_Plaf3.push(pointeur(126,134,arr,j));
          N_T_Ctr3.push(pointeur(135,136,arr,j));
          L_filler3.push(pointeur(137,154,arr,j));
          break;
     case 'B04':
          
          L_Type_Enreg4.push(pointeur(22,27,arr,j));
          N_Num_Affilie4.push(pointeur(28,39,arr,j));
          L_Période4.push(pointeur(40,51,arr,j));
          N_Num_Assure4.push(pointeur(52,63,arr,j));
          L_Nom_Prenom4.push(pointeur(64,78,arr,j));
          L_Num_CIN4.push(pointeur(79,90,arr,j));
          N_Nbr_Jours4.push(pointeur(91,96,arr,j));
          N_Sal_Reel4.push(pointeur(97,111,arr,j));
          N_Sal_Plaf4.push(pointeur(112,124,arr,j));
          S_Ctr4.push(pointeur(125,143,arr,j));
          L_filler4.push(pointeur(144,259,arr,j));
          break;
     case 'B05':
          
          L_Type_Enreg5.push(pointeur(0,2,arr,j));
          N_Num_Affilie5.push(pointeur(3,9,arr,j));
          L_Période5.push(pointeur(10,15,arr,j));
          N_Nbr_Salaries5.push(pointeur(16,21,arr,j));
          N_T_Num_Imma5.push(pointeur(22,36,arr,j));
          N_T_Jours_Declares5.push(pointeur(37,42,arr,j));
          N_T_Salaire_Reel5.push(pointeur(43,57,arr,j));
          N_T_Salaire_Plaf5.push(pointeur(58,70,arr,j));
          N_T_Ctr5.push(pointeur(71,89,arr,j));
          L_filler5.push(pointeur(90,259,arr,j));
         break;
     case 'B06':
        
        L_Type_Enreg6.push(pointeur(0,2,arr,j));
        N_Num_Affilie6.push(pointeur(3,9,arr,j));
        L_Période6.push(pointeur(10,15,arr,j));
        N_Nbr_Salaries6.push(pointeur(16,21,arr,j));
        N_T_Num_Imma6.push(pointeur(22,36,arr,j));
        N_T_Jours_Declares6.push(pointeur(37,42,arr,j));
        N_T_Salaire_Reel6.push(pointeur(43,57,arr,j));
        N_T_Salaire_Plaf6.push(pointeur(58,70,arr,j));
        N_T_Ctr6.push(pointeur(71,89,arr,j));
        L_filler6.push(pointeur(90,259,arr,j));
        break;
    }  


}
/////////
   
   const fs = require('fs');
   const myConsole = new console.Console(fs.createWriteStream('./depo.txt'));
   myConsole.log("les nom et les prenoms")
   myConsole.table(L_Nom_Prenom2);
   
   myConsole.table(L_Type_Enreg0);
   myConsole.table(N_Identif_Transfert0); 
   myConsole.table(L_filler0);
   myConsole.table(L_Cat0);
   
   myConsole.table(L_Type_Enreg1);
   myConsole.table(N_Num_Affilie1);
   myConsole.table(L_Période1);
   myConsole.table(L_Raison_Sociale1);
   myConsole.table(L_Activité1);
   myConsole.table(L_Adresse1);
   myConsole.table(L_Ville1);
   myConsole.table(C_Code_Postal1);
   myConsole.table(C_Code_Agence1);
   myConsole.table(D_Date_Emission1);
   myConsole.table(D_Date_Exig1);
   
   
   myConsole.table(L_Type_Enreg2);
   myConsole.table(N_Num_Affilie2);
   myConsole.table(L_Période2);
   myConsole.table(N_Enfants2);
   myConsole.table(L_Nom_Prenom2);
   myConsole.table(N_AF_A_Payer2);
   myConsole.table(N_Num_Assure2);
   myConsole.table(N_AF_A_Deduire2);
   myConsole.table(N_AF_Net_A_Payer2);
   myConsole.table(N_AF_A_Reverser2);
   myConsole.table(N_Jours_Declares2);
   myConsole.table(N_Salaire_Reel2);
   myConsole.table(N_Salaire_Plaf2);
   myConsole.table(L_Situation2);
   myConsole.table(S_Ctr2);
   myConsole.table(L_filler2);
   
   
   myConsole.table(L_Type_Enreg3);
   myConsole.table(N_Num_Affilie3);
   myConsole.table(L_Période3);
   myConsole.table(N_Nbr_Salaries3);
   myConsole.table(N_T_Enfants3);
   myConsole.table(N_T_AF_A_Payer3);
   myConsole.table(N_T_AF_A_Deduire3);
   myConsole.table(N_T_AF_Net_A_Payer3);
   myConsole.table(N_T_Num_Imma3);
   myConsole.table(N_T_AF_A_Reverser3);
   myConsole.table(N_T_Jours_Declares3);
   myConsole.table(N_T_Salaire_Reel3);
   myConsole.table(N_T_Salaire_Plaf3);
   myConsole.table(N_T_Ctr3);
   myConsole.table(L_filler3);
   
   
   
   
   myConsole.table(L_Type_Enreg4);
   myConsole.table(N_Num_Affilie4);
   myConsole.table(L_Période4);
   myConsole.table(N_Num_Assure4);
   myConsole.table(L_Nom_Prenom4);
   myConsole.table(L_Num_CIN4 );
   myConsole.table(N_Nbr_Jours4);
   myConsole.table(N_Sal_Reel4);
   myConsole.table(N_Sal_Plaf4);
   myConsole.table(S_Ctr4);
   myConsole.table(L_filler4);
   
   
   myConsole.table(L_Type_Enreg5);
   myConsole.table(N_Num_Affilie5);
   myConsole.table(L_Période5);
   myConsole.table(N_Nbr_Salaries5);
   myConsole.table(N_T_Num_Imma5);
   myConsole.table(N_T_Jours_Declares5);
   myConsole.table(N_T_Salaire_Reel5);
   myConsole.table(N_T_Salaire_Plaf5);
   myConsole.table(N_T_Ctr5);
   myConsole.table(L_filler5);
   
   
   myConsole.table( L_Type_Enreg6);
   myConsole.table(N_Num_Affilie6);
   myConsole.table(L_Période6);
   myConsole.table(N_Nbr_Salaries6);
   myConsole.table(N_T_Num_Imma6);
   myConsole.table(N_T_Jours_Declares6);
   myConsole.table(N_T_Salaire_Reel6);
   myConsole.table(N_T_Salaire_Plaf6);
   myConsole.table(N_T_Ctr6);
   myConsole.table(L_filler6);
  
///////////////////////////////////////////////////
/////////////////////////////////////////////
arr=syncReadFile('./nada2.txt');
arr3=syncReadFile('./nada.txt');
for (let l = 0; l < arr.length; l++) {
arr2=arr[l].split(';');
Matricule=arr2[0];
Nom=arr2[1];
Prenom=arr2[2];
cnss=arr2[3];
Nombre_enfant=arr2[4];
jrs_trav=arr2[5];
brut_np=arr2[6];
brut_p=arr2[7];
cin=arr2[8];
mont_cnss=arr2[9];
Date_de_dpart=arr2[10];
const myConsole2 = new console.Console(fs.createWriteStream('./depo2.txt'));
for (let j = 0; j < N_Num_Assure2.length; j++) {
if (N_Num_Assure2[j]==cnss)
N_Num_Assure2[j]=cnss;
N_Enfants2[j]=Nombre_enfant;
N_Jours_Declares2[j]=jrs_trav;
myConsole2.log(L_Type_Enreg2[j]+N_Num_Affilie2[j]+L_Période2[j]+N_Num_Assure2[j]+L_Nom_Prenom2[j]+N_Enfants2[j]+N_AF_A_Payer2[j]+N_AF_A_Deduire2[j]+N_AF_Net_A_Payer2[j]+N_AF_A_Reverser2[j]+N_Jours_Declares2[j]+N_Salaire_Reel2[j]+N_Salaire_Plaf2[j]+L_Situation2[j]+S_Ctr2+L_filler2[j]);
}}
