import {SafeAreaView, StyleSheet, Dimensions, View, Image} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import TextComponent from '../components/TextComponent';
import {getByCode} from '../api/api';
import {LineChart} from 'react-native-chart-kit';
import {Colors, Card, ActivityIndicator} from 'react-native-paper';
import {convertToDate, convertToNumber} from '../utils/utils';
import useLocale from '../hooks/useLocale';

const IMG_BG =
  'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4386321.jpg&fm=jpg';

const {width} = Dimensions.get('screen');

const InfoScreen = ({route, navigation}) => {
  const locale = useLocale();
  const {
    info: {codigo, nombre, unidad_medida, fecha, valor},
  } = route.params;
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    await getByCode(codigo)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .then(({serie}) => {
        const dates = [];
        const values = [];
        const media = Number.parseInt(serie.length / 2, 10);
        dates.push(convertToDate(locale, serie[0].fecha));
        serie.map((item, index) => {
          if (index === media) {
            dates.push(convertToDate(locale, item.fecha));
          }
          values.push(item.valor);
        });
        dates.push(convertToDate(locale, serie[serie.length - 1].fecha));
        const dataChart = {
          labels: dates,
          datasets: [
            {
              data: values,
              strokeWidth: 2,
            },
          ],
        };
        setData(dataChart);
        setLoading(false);
        setTitle(nombre);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title === '' ? 'No title' : title,
    });
  }, [navigation, title]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: IMG_BG}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      <View style={styles.containerInfo}>
        <Card>
          <Card.Content>
            <View style={styles.containerDate}>
              <TextComponent color={Colors.grey400}>
                {convertToDate(locale, fecha)}
              </TextComponent>
            </View>
            <TextComponent size={26} textAlign="center">
              {nombre}
            </TextComponent>
            <View style={styles.containerAmount}>
              <TextComponent size={46}>
                {convertToNumber(locale, valor)}
              </TextComponent>
              <TextComponent size={22} color={Colors.grey500}>
                {unidad_medida}
              </TextComponent>
            </View>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.containerChart}>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={Colors.grey700} />
          </View>
        ) : (
          <LineChart
            data={data}
            width={width}
            height={320}
            style={styles.chart}
            chartConfig={{
              backgroundGradientFrom: Colors.blue400,
              backgroundGradientTo: Colors.blue900,
              color: () => Colors.grey50,
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.color,
  },
  containerInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  containerChart: {
    flex: 1,
    justifyContent: 'center',
  },
  containerDate: {
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  containerAmount: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  chart: {
    borderRadius: 20,
    shadowColor: Colors.grey500,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});
