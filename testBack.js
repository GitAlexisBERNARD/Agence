import { OneMaison, allMaisons , allMaisonsAgentFav, allMaisonsFav, allMaisonsAgent , allMaisonSortedPrix , bySurface , surfaceORprice, allagentinfo, allMaisonsAgentid, allMaisonsAgentName, SortallMaisonsAgent, allMaisonsAgentSurf, lisa} from "./backend.mjs";

// Etape 8

try{
    const records = await allMaisons();
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) {
    console.error(e);
}

// Etape 11

try{
    const recordsId = await OneMaison('zwupotdi2bw8sqw');
    console.log(JSON.stringify(recordsId, null, 2));
    } catch (e) {
        console.error(e);
}

// Etape 12 

try{
    const recordFav = await allMaisonsFav();
    console.log(JSON.stringify(recordFav, null, 2));
    } catch (e) {
        console.error(e);
}

// Etape 13

try{
    const recordsPrix = await allMaisonSortedPrix();
    console.log(JSON.stringify(recordsPrix, null, 2));
    } catch (e) {
        console.error(e);
}

// Etape 14

try{
    const recordsSurf = await bySurface(100);
    console.log(JSON.stringify(recordsSurf, null, 2));
    } catch (e) {
        console.error(e);
}

// Etape 15
try{
    const recordsSurfORprice = await surfaceORprice(100, 100000);
    console.log(JSON.stringify(recordsSurfORprice, null, 2));
    } catch (e) {
        console.error(e);
}

//Etape 16 


try{
    const recordsAgent = await allagentinfo('fr02wt84ri1pcmv');
    console.log(JSON.stringify(recordsAgent, null, 2));
    } catch (e) {
        console.error(e);
}


//Etape 7 tp4 




// Etape 8 Tp4


// Etape 8 Tp4

 try{
    const records = await allMaisonsAgent();
    console.log(JSON.stringify(records, null, 2));
    } catch (e) {
        console.error(e);
}


try{
    const recordsmaisonagent = await allMaisonsAgentid('fr02wt84ri1pcmv');
    console.log(JSON.stringify(recordsmaisonagent, null, 2));
    } catch (e) {
        console.error(e);
}

try{
    const recordsmaisonagentname = await allMaisonsAgentName('Roger');
    console.log(JSON.stringify(recordsmaisonagentname, null, 2));
    } catch (e) {
        console.error(e);
}
try{
    const recordsmaisonsort = await SortallMaisonsAgent();
    console.log(JSON.stringify(recordsmaisonsort, null, 2));
    } catch (e) {
        console.error(e);
}

console.log('------------------------------NEW-----------------------------')

try{
    const recordsallmaisonsagentsurf = await allMaisonsAgentSurf('fr02wt84ri1pcmv', 100);
    console.log(JSON.stringify(recordsallmaisonsagentsurf, null, 2));
    } catch (e) {
        console.error(e);
}
console.log('------------------------------NEW-----------------------------')

try{
    const recordsagentfav = await allMaisonsAgentFav('fr02wt84ri1pcmv');
    console.log(JSON.stringify(recordsagentfav, null, 2));
    } catch (e) {
        console.error(e);
}

console.log('------------------------------NEW-----------------------------')

try {
    const bySurfaceAgentRecord = await lisa("130", 'fr02wt84ri1pcmv');
  console.log(JSON.stringify(bySurfaceAgentRecord, null, 2));
  } catch (e) {
    console.error(e);
  }