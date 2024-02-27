import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import logo from "../../../assets/images/EFSPLogo.png";

const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });

const PdfFile = () => {
  return (
 <Document>
<Page style={styles.body}>
  <Text style={styles.header} fixed>
     This is Header Section
  </Text>
  <Text style={styles.title}>Don Quijote de la Mancha</Text>
  <Text style={styles.author}>Miguel de Cervantes</Text>
  <Image
    style={styles.image}
    src={logo}
  />
  <Text style={styles.subtitle}>
  En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
    mucho tiempo que vivía un hidalgo
  </Text>
  <Text style={styles.text}>
    consumían las tres partes de su hacienda. El resto della concluían sayo
    de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
    mismo, los días de entre semana se honraba con su vellori de lo más
    fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina
    que no llegaba a los veinte, y un mozo de campo y plaza, que así
    ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro
    hidalgo con los cincuenta años, era de complexión recia, seco de carnes,
    enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
    tenía el sobrenombre de Quijada o Quesada (que en esto hay alguna
    diferencia en los autores que deste caso escriben), aunque por
    conjeturas verosímiles se deja entender que se llama Quijana; pero esto
    importa poco a nuestro cuento; basta que en la narración dél no se salga
    un punto de la verdad
  </Text>
  <Text style={styles.text}>
    Con estas y semejantes razones perdía el pobre caballero el juicio, y
    desvelábase por entenderlas, y desentrañarles el sentido, que no se lo
    sacara, ni las entendiera el mismo Aristóteles, si resucitara para sólo
    ello. No estaba muy bien con las heridas que don Belianis daba y
    recibía, porque se imaginaba que por grandes maestros que le hubiesen
    curado, no dejaría de tener el rostro y todo el cuerpo lleno de
    cicatrices y señales; pero con todo alababa en su autor aquel acabar su
    libro con la promesa de aquella inacabable aventura, y muchas veces le
    vino deseo de tomar la pluma, y darle fin al pie de la letra como allí
    se promete; y sin duda alguna lo hiciera, y aun saliera con ello, si
    otros mayores y continuos pensamientos no se lo estorbaran. Tuvo muchas
    veces competencia con el cura de su lugar (que era hombre docto graduado
    en Sigüenza), sobre cuál había sido mejor caballero, Palmerín de
    Inglaterra o Amadís de Gaula; mas maese Nicolás, barbero del mismo
    pueblo, decía que ninguno llegaba al caballero del Febo, y que si alguno
    se le podía comparar, era don Galaor, hermano de Amadís de Gaula, porque
    tenía muy acomodada condición para todo; que no era caballero
    melindroso, ni tan llorón como su hermano, y que en lo de la valentía no
    le iba en zaga.
  </Text>
  <Text style={styles.text}>
    En resolución, él se enfrascó tanto en su lectura, que se le pasaban las
    noches leyendo de claro en claro, y los días de turbio en turbio, y así,
    del poco dormir y del mucho leer, se le secó el cerebro, de manera que
    vino a perder el juicio. Llenósele la fantasía de todo aquello que leía
    en los libros, así de encantamientos, como de pendencias, batallas,
    desafíos, heridas, requiebros, amores, tormentas y disparates
    imposibles, y asentósele de tal modo en la imaginación que era verdad
    toda aquella máquina de aquellas soñadas invenciones que leía, que para
    él no había otra historia más cierta en el mundo.
  </Text>
  <Text style={styles.subtitle} break>
    Capítulo II: Que trata de la primera salida que de su tierra hizo el
    ingenioso Don Quijote
  </Text>
  <Text style={styles.text}>
    adarga, tomó su lanza y por la puerta falsa de un corral salió al campo
    con grandísimo contento y alborozo de ver con cuánta facilidad había
    dado principio a su buen deseo. Mas apenas se vio en el campo cuando le
    asaltó un pensamiento terrible, y tal, que por poco le hiciera dejar la
    comenzada empresa; y fue que le vino a la memoria que no era armado
    caballero, y que, conforme a ley de caballería, ni podía ni debía tomar
    armas con ningún caballero; y puesto que lo fuera, había de llevar armas
    blancas, como novel caballero, sin empresa en el escudo, hasta que por
    su esfuerzo la ganase. Estos pensamientos le hicieron titubear en su
    propósito; mas pudiendo más su locura que otra razón alguna, propuso de
    hacerse armar caballero del primero que topase, a imitación de otros
    muchos que así lo hicieron, según él había leído en los libros que tal
    le tenían. En lo de las armas blancas, pensaba limpiarlas de manera, en
    teniendo lugar, que lo fuesen más que un arminio; y con esto se quietó18
    y prosiguió su camino, sin llevar otro que aquel que su caballo quería,
    creyendo que en aquello consistía la fuerza de las aventuras
  </Text>
  <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
    `${pageNumber} / ${totalPages}`
  )} fixed />
</Page>
</Document>

  );
};

export default PdfFile;