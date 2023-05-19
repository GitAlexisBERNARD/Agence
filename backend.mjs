import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


// Etape 7 

export async function allMaisons() {
    const records = await pb.collection('maison').getFullList() ;
    return records ;
}

// Etape 11 

export async function OneMaison(id) {
    const recordsId = await pb.collection('maison').getOne(id) ;
    return recordsId ;
}

// Etape 12

export async function allMaisonsFav() {
    const recordsFav = await pb.collection('maison').getFullList({ filter:  'favori = true'  }) ;
    return recordsFav ;
}

// Etape 13 

export async function allMaisonSortedPrix() {
    const recordsPrix = await pb.collection('maison').getFullList({ sort : 'prix'}) ;
    return recordsPrix ;
}

// Etape 14

export async function bySurface(m){
    const recordsSurf = await pb.collection('maison').getFullList({ filter:  `surface > ${m}`}) ;
    return recordsSurf ;
}

// Etape 15

export async function surfaceORprice(m,p){
    const recordsSurfORprice = await pb.collection('maison').getFullList({ filter:  `surface > ${m}` || `prix < ${p}`}) ;
    return recordsSurfORprice ;
}

// Etape 19

export async function allagentinfo(id){
    const recordsAgent = await pb.collection('agent').getOne(id) ;
    return recordsAgent ;
}


export async function allMaisonsAgent(){
    const recordsAllMaison = await pb.collection('maison').getFullList(
        { expand: 'agent'}
    ) ;
    return recordsAllMaison;
}

export async function allMaisonsAgentid(id){
    const recordsmaisonagent = await pb.collection('maison').getFullList({ filter:  `agent.id = '${id}'`, expand: 'agent'}) ;
    return recordsmaisonagent;
}
export async function allMaisonsAgentName(name){
    const recordsmaisonagentname = await pb.collection('maison').getFullList({ filter:  `agent.nom = '${name}'`, expand: 'agent'}) ;
    return recordsmaisonagentname;
}

export async function SortallMaisonsAgent(){
    const recordsAllMaison = await pb.collection('maison').getFullList(
        {  sort : 'prix', expand: 'agent'}
    ) ;
    return recordsAllMaison;
}


export async function allMaisonsAgentSurf(id, surface){
    const records= await pb.collection('maison').getFullList({ filter:  `agent.id = '${id}'`  &&  `surface >= '${surface}'` , expand: 'agent'}) ;
    return records;
}

export async function allMaisonsAgentFav(id) {
    const recordsFav = await pb.collection('maison').getFullList({ filter:  `favori = true`  && `agent.id = '${id}'` , expand: 'agent'}) ;
    return recordsFav ;
}

export async function lisa(surface, id) {
    const bySurfaceAgentRecord = await pb.collection('maison').getFullList({ filter : `agent.id = '${id}'` && `surface >= '${surface}'`,
        expand: 'agent'
      });
    return bySurfaceAgentRecord ;
}