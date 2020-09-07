import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, 
  ScrollView, Image} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (

    <View style={styles.container}>
      <ScrollView>
        <View style={styles.navBar}>
          <Image
                style={styles.icon}
                source={{
                  uri: 'https://www.drcommodore.it/wp-content/uploads/2019/11/sul-pericolo-netflix-amazon-alberto-anile-gruppo-lazio-coverNetflix.jpg',
                }}
          />  
          <Text style={styles.navBarItem}>Serie TV</Text>
          <Text style={styles.navBarItem}>Film</Text>
          <Text style={styles.navBarItem}>La mia lista</Text>
        </View>
        <View style={styles.catalog}>
          <Text style={styles.title}>I più popolari su Netlix</Text>
          <View style={styles.popular}>
            <ScrollView horizontal={true}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.ilpost.it/wp-content/uploads/2019/12/locandine14.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.105.net/resizer/335/-1/false/1450774326336.jpg--the_assassin_di_hou_hsiao_hsien_.jpg?1450774327000',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.ilpost.it/wp-content/uploads/2017/12/locandine21.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.ilpost.it/wp-content/uploads/2017/12/locandine09.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://ivid.akamaized.net/media/foto/2019/03/18/captive_state_137e39.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://movieplayer.net-cdn.it/images/2012/10/29/cloud-atlas-la-locandina-italiana-del-film-255594.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/I/51DUtAc4WLL._AC_SY400_.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://pad.mymovies.it/img/image/?size=400&image=https://pad.mymovies.it/cinemanews/2019/164377/locandina-ver.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.ilpost.it/wp-content/uploads/2018/12/migliori-locandine-film-2018-21.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.ilpost.it/wp-content/uploads/2018/12/migliori-locandine-film-2018-20.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.ifilmdavedere.it/wpifilm/wp-content/uploads/2018/01/dunkirk-film-da-vedere-2017-2018-locandina-italiana-christopher-nolan.png',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/I/91BKjFYwvoL._AC_SY879_.jpg',
                }}
              />
            </ScrollView>
          </View>
          <View style={styles.moment}>
            <Text style={styles.title}>I titoli del momento</Text>
            <ScrollView horizontal={true}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/I/519oThDXbCL._AC_.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://pad.mymovies.it/filmclub/2016/09/019/locandina.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://pillsofmovies.com/wp-content/uploads/2016/11/il-grande-gatsby-nuovo-trailer-italiano-due-spot-tv-e-10-locandine-2.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://d33ndt48tl1iar.cloudfront.net/kpm2cinx/field/image/tcimage/143350.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://static.sky.it/images/skytg24/it/spettacolo/cinema/2020/05/11/james-bond-locandine-film-007/2015-spectre.jpg.transform/gallery-vertical-mobile/c01336086644fc38e46d05b63064a036e72d2ee6/img.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.caraudio66.it/portale/upload_pc/film/1/4344.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://aforismi.meglio.it/img/film/Un_colpo_perfetto.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.filmforlife.org/wp-content/uploads/2016/04/frankenstein-locandina.jpg',
                }}
              />
            </ScrollView>
          </View>
          <View style={styles.rewatch}>
            <Text style={styles.title}>Da rivedere</Text>
            <ScrollView horizontal={true} contentContainerStyle={{
              paddingRight: 15,}}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: 'https://www.drogbaster.it/locandine/slides/il-gladiatore.jpg',
                  }}
                />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.ilpost.it/wp-content/uploads/2017/12/locandine40.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.ilpost.it/wp-content/uploads/2018/12/migliori-locandine-film-2018-5.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://youmediafanpage.akamaized.net/gallery/5a481665e4b081ca0764dc34_5a481667e4b081ca0764ddbc_p854x570.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.ilpost.it/wp-content/uploads/2018/12/migliori-locandine-film-2018-9.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.movietele.it/files/styles/locandina/public/images/cinema/locandine/big/98293.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/I/81aL5A-TxeL._AC_SL1200_.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://youmediafanpage.akamaized.net/gallery/5d252a20e4b0f7f675b7f950_5d252a21e4b0f7f675b7f951_p854x570.jpg',
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.matteotranchellini.it/wp-content/uploads/2018/11/Sulla-mia-pelle_Manifesto.jpg',
                }}
              />
            </ScrollView>
          </View>
        </View>
        <View style={styles.menuBar}>
          <Image
            style={{ marginHorizontal: 8 }}
            source={require('./assets/netflix_icons/home.png')}
          />
          <Image
            style={{ marginHorizontal: 8 }}
            source={require('./assets/netflix_icons/search.png')}
          />
          <Image
            style={{ marginHorizontal: 8 }}
            source={require('./assets/netflix_icons/download.png')}
          />
          <Image
            style={{ marginHorizontal: 8 }}
            source={require('./assets/netflix_icons/next.png')}
          />
          <Image
            style={{ marginHorizontal: 8 }}
            source={require('./assets/netflix_icons/other.png')}
          />
        </View>
      </ScrollView>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#171717',
  },
  menuBar: {
    backgroundColor: '#111111',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navBar: {
    flex:0.1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#000000',
    width: 415,
    height: 60,
    justifyContent: 'center'
  },
  navBarItem: {
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 20,
    color: '#e7e7e7'
  },
  catalog: {
    marginTop: 20,
    marginBottom: 20,
  },
  popular: {
    marginTop: 20
  },
  moment: {
    marginTop: 20
  },
  rewatch: {
    marginTop: 20
  },
  title: {
    color: '#e7e7e7',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10
  },
  tinyLogo: {
    width: 100,
    height: 150,
    borderRadius: 6,
    marginHorizontal: 6,
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: 15,
    marginLeft: 4
  }
});
