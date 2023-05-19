import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// Exercice 5 

try { const records = await pb.collection('maison').getFullList() ;
   console.table(JSON.stringify(records, null, 2)) ;
       } catch (e) {
     console.error(e) ;
}

// Exercice 6

try { const recordsID = await pb.collection('maison').getOne('zwupotdi2bw8sqw') ;
    console.table(JSON.stringify(recordsID, null, 2)) ;
    } catch (e) {
    console.error(e) ;
}

// Exercice 7

try { const recordsDate = await pb.collection('maison').getFullList({ sort : 'created'}) ;
    console.table(JSON.stringify(recordsDate, null, 2)) ;
    } catch (e) {
    console.error(e) ;
}

// Exercice 8

try { const recordsDate = await pb.collection('maison').getFullList({ sort : '-created'}) ;
    console.table(JSON.stringify(recordsDate, null, 2)) ;
    } catch (e) {
    console.error(e) ;
}

// Exercice 9

try { const recordsFav = await pb.collection('maison').getList(1,50, { filter:  'favori = true'  }) ;
    console.log(recordsFav) ;
} catch (e) {
    console.error(e) ;
}

// Exercice 10

try { const recordsSurf = await pb.collection('maison').getList(1,50, { filter:  'surface > 100'  }) ;
    console.log(recordsSurf) ;
} catch (e) {
    console.error(e) ;
}

// Exercice 11

try { const recordsSurfb = await pb.collection('maison').getList(1,50, { filter:  'surface > 100' && 'nbSdb = 2'  }) ;
    console.log(recordsSurfb) ;
} catch (e) {
    console.error(e) ;
}

// Exercice 12

try { const recordsSurfOrChamb = await pb.collection('maison').getList(1,50, { filter:  'surface > 100' || 'nbChambres = 3'  }) ;
    console.log(recordsSurfOrChamb) ;
} catch (e) {
    console.error(e) ;
}

// Exercice 13

try { const recordsSurfOrprix = await pb.collection('maison').getList(1,50, { filter:  'surface > 100', sort : 'prix'}) ;
    console.log(recordsSurfOrprix) ;
} catch (e) {
    console.error(e) ;
}



// Exercice 14

try { const recordsnom = await pb.collection('maison').getList(1,50, { sort : 'nomMaison'}) ;
    console.log(recordsnom) ;
} catch (e) {
    console.error(e) ;
}

// Exercice 15

try { const recordsnomtrue = await pb.collection('maison').getList(1,50, { filter: 'nomMaison = "toto"'}) ;
    console.log(recordsnomtrue) ;
} catch (e) {
    console.error(e) ;
}


// Exercice 16

try { const recordsnomdif = await pb.collection('maison').getList(1,50, { filter: 'nomMaison != "toto"' , sort : 'nomMaison'}) ;
    console.log(recordsnomdif) ;
} catch (e) {
    console.error(e) ;
}


