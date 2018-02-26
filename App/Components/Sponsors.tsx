import React from 'react'
import { View, Text } from 'react-native'
import Sponsor from './Sponsor'
import { Images } from '../Themes'
import styles from './Styles/SponsorsStyles'

const Sponsors = () => {
  return (
    <View style={styles.sponsors}>
      <Text style={styles.heading}>Our Sponsors</Text>
      <Text style={styles.description}>
        {/* We love the sponsors for this conference.
        They make all of this fun stuff possible, and we
        couldn’t have done it without them. */}

        Our sponsors make it possible for us to host WordCamp 2018. 
        Most of them will be represented at the event, 
        ask around and strike up a chat!
      </Text>

      {/* <Text style={styles.sponsorTierTitle}>
        Platinum Sponsors
      </Text>
      <View style={styles.sponsorTier}>
        <Sponsor url={'https://www.squarespace.com/'} image={"https://fluxit.be/react/wordcamp18/wp-content/uploads/2018/02/Volta-x-communicatie-in-vorm.png"} />
      </View> */}

      <Text style={styles.sponsorTierTitle}>
        Diamond Sponsors
      </Text>
      <View style={styles.sponsorTier}>
        <Sponsor url={'https://jetpack.com/'} image={Images.jetpack} />
        <Sponsor url={'https://woocommerce.com/'} image={Images.wooCommerce} />
        <Sponsor url={'https://semperplugins.com'} image={Images.allInOneSEO} />
        <Sponsor url={'https://yoast.com/'} image={Images.yoast} />
      </View>

      <Text style={styles.sponsorTierTitle}>
        Gold Sponsors
      </Text>
      <View style={styles.sponsorTier}>
        <Sponsor url={'https://www.combell.com'} image={Images.combell} />
        <Sponsor url={'https://www.mollie.com'} image={Images.mollie} />
        <Sponsor url={'https://be.godaddy.com'} image={Images.godaddy} />
      </View>

      <Text style={styles.sponsorTierTitle}>
        Silver Sponsors
      </Text>
      <View style={styles.sponsorTier}>
        <Sponsor url={'https://appsaloon.be/'} image={Images.appsaloon}  />
        <Sponsor url={'https://www.savvii.eu/'} image={Images.savvii}  />
        <Sponsor url={'https://dashboard.weglot.com/register-wordpress'} image={Images.weglot}  />
        <Sponsor url={'https://www.jackmail.com/'} image={Images.jackmail}  />
        <Sponsor url={'https://level-level.com'} image={Images.levellevel}  />
        <Sponsor url={'https://www.dutchwebdesign.nl/'} image={Images.dutchwebdesign}  />
        <Sponsor url={'https://www.bluehost.com/'} image={Images.bluehost}  />
      </View>

      <Text style={styles.sponsorTierTitle}>
        Bronze Sponsors
      </Text>
      <View style={styles.sponsorTier}>
        <Sponsor url={'https://webbird.be/'} image="" name="WebBird" isLow />
        <Sponsor url={'https://www.dailybits.be/'} image="" name="dailybits" isLow />
        <Sponsor url={'https://jerrix.be/'} image="" name="JerrixIT" isLow />
        <Sponsor url={'https://quadus.be/'} image="" name="Quadus" isLow />
        <Sponsor url={'https://quadus.be/'} image="" name="Quadus" isLow />
        <Sponsor url={'https://www.nilmedia.com'} image="" name="NILMEDIA" isLow />
        <Sponsor url={'http://www.weareknights.be/'} image="" name="We Are Knights" isLow />
        <Sponsor url={'https://www.davel.be/'} image="" name="Davel" isLow />
        <Sponsor url={'https://conimpeto.be/'} image="" name="Con Impeto" isLow />
        <Sponsor url={'https://volta.be/'} image="" name="Volta" isLow />
        <Sponsor url={'https://www.aranere.be/'} image="" name="ARANERE" isLow />
      </View>

    </View>
  )
}

export default Sponsors
