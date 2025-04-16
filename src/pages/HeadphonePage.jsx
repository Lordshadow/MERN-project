import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PeripheralsPage.css'; // Assuming you want to use the same styles

const HeadphonePage = () => {
  const headphoneData = [
    { id: '67ff0f9f173e97a1a082e4da', name: 'Sony WH-1000XM5', image: 'data:image/jpeg;base64,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', slug: 'sony-wh-1000xm5' },
  { id: '67ff0f9f173e97a1a082e4db', name: 'Bose 700', image: 'data:image/jpeg;base64,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', slug: 'bose-700' },
  { id: '67ff0f9f173e97a1a082e4dc', name: 'Sennheiser HD 800 S', image: 'data:image/jpeg;base64,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', slug: 'sennheiser-hd-800-s' },
  { id: '67ff0f9f173e97a1a082e4dd', name: 'Logitech G Pro X Wireless', image: 'data:image/jpeg;base64,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', slug: 'logitech-g-pro-x-wireless' },
  { id: '67ff0f9f173e97a1a082e4de', name: 'SteelSeries Arctis Nova Pro Wireless', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhISEhMVFRIXFxUaFRYVFRUVFRUXFhYXFxcVFRUYHSggGBomGxUWITEhJSkrLy4vFx8zODMsNygtLi0BCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAQsAvQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABQQGAgMHAQj/xABIEAABAwICBgYEDAUCBQUAAAABAAIDBBEhMQUGEkFRYSIycYGRoRNSscEHFEJUYoKSk7LR0vAVFiNy4aLxMzRTc9RDY4OUs//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDuKEIQCEIQCELxzgAScAMycgg8kkDRcmwS6euJ+iOG/vO7u8VEra7aN8h8kcB6xHE+Q7Sl+245BAx+ND/fH2rF9aD8tzDuIJI72nBL3wSHh4qI+F+8H2oGM+kqqI2c5rhuJaLEcQRZDNaJB1omnsJb7brLRY9I10ThgMWn1Tw7Cok1JYkEYoGUetsPymPb3Aj238lPpNN08hs2QX4Ou0nkNq1+5VCoorpRNCQSCg6uhUPV3WN0REcxJiOAccTH372+zyV8BQCEIQCEIQCEIQCEIQCEIQCEIQCWaXqPkbhi7n6rfeewcUxleGgk7h+7KsaUmtgcybntOduW4cgEEZ8lySVm2oASuWosbbuPA/ksTMgbU1aA0An3rN0wdlfwISSOoItw9i3NqCgkVBLSHNOINxfiMsU7qiHtZKMngX5Hh7u5J5GktBItcXHPmOWCm6Dk2oZYt7DtDsdj7Q7xQYvYlukKbemBkWid9wUCJ8CuOp9cXRmJx6Udrc2HLwy7LKpSSi6m6ArQyojO5x2T2OwHnY9yDoCEIQCEIQCEIQCEIQCEIQCEIQRK9+AHee7Lzsfqql6SqemTuBsrTpaazHv7h9XC32i5UWqfh5oPC5eB+5YXWJQbGuwTfV6gM0lj1G2Ljy3N7T7LpJGV0bQND6GFoI6Z6Tu07u4WCDDTtKDHtAYs/DvHs8FXNCTFlW0fJe1zT29Yfht3q6vaCCDkRY96oWkbwvuf/TeD2hrr+Y9qCRVnZe5vAkeajPlW/WY7M7uDg1w8Le5KDMggVctnFaBVEYg4jEdoWFe/pKIXIO4QShzWuGTgCOwi62JXqvLtUlOf/bYPsjZ9yaIBCEIBCEIBCEIBCEIBeOdYEnIL1aqrqkcbD7RDfegr2s0hbCxu8kX7cz5qozb1Ztb5OmxvInxI/JVshBqXh4L3choQNdWKL0kzQeq3pO7GnAd5suhJBqdR7EJkObz/AKW4Dzv5J+gFVNbabp7W57ce0YHyIVrSjWaHahv6pB7j0T7R4IKlrJJeOjk3ui2T2stfzcUhMyd6wf8AJU59WWRv2tp3uCq3pEHtU65Uey2E3K92EHU9RX3oYeXpB4SPCfqvahf8nH/dJ+MqwoBCEIBCEIBCEIBCEIBaqj5I4uHld3uW1aZ82dp/C5BUNaHXm7Gge0+9JCE41i/47+xv4QlU4DWF7zssHK58AgjkYrZDEXODRmSAO0mwXjbFrZGHaY8AtNiM8rg5JxqtTbU7TuaC492A8z5ILtTwhjWsGTQAOwCy2IQgFprYduN7eLSO+2HmtyEHOtOC+j3/AEZ2nxbs+9UrbXSNcqH0dJV26pfE5vK8jQR5+xcyugl0+JU4QqHoxt3J82BBd9Sm2pGf3P8AxlPUq1XZamjH9/43JqgEIQgEIQgEIQgEIQgFpm6ze/8Afmty0y9ZvY73IKhrCz+s48QD5W9yiV1NHIwskF2ndcjLgRimOsjP6jTxbbwJ/NR4pNmzha9t/Ox9yCDLC1kWw0WaAA0DdYi1lY9TqezHycSGjsaLnzPkq9XHFo4kk/vv8ldtDQbEEbd+zc9rukfagmoQhAIQhAg16bein7G+UjCuP2XdtI0bZY3xu6rgQd2BFs9xXKNM6rzQPLRaRuYLTY25tO/sugiaBju9WpsKR6uUrg83aR2ghXKDRsjiBskcyLDzQP8AQ7LQxj6N/HH3qYsIYw1rWjIADwFlmgEIQgEIQgEIQgEIQgFpmzb2n2E+5blqmzZ/cfwuQINYYbgO9Um/Yf8AZKKep2bEWva2N7W7v2VaKxqSTaOaThh2IF8MJlka0b7DuzJ5b/BX0BJdA0jWOJAxtn3hO0AheOdbNRpavh5oJSEplqHH5R7sPYor380D8qr6esXAkG45E+zBSad3TaLnPid2K0aVddyCPRQtJGNsRgcPareq3o82IVhjlDsj+Y7kGaEIQCEIQCEIQCEIQCEIQC01Rs3aAJ2bGwxNt9hvNr4LcsZHgC5QL5Hh4u03Fr3GVkvdKAbWP2SR3kCw71MmnFyWtAJzIAue071FcUE7RThdxvwHv/JT5JAEhjh2jZTiA0WGSDKea6hSzryaUk2CzhpQMXYnhuH5oNDWudkMOJwWqeaKM2kkse8DvIy8UzKXVejoXG7xfEnPK5JNu8k48UG3ots9ovvwN7gjMdxUF9Q2R12kHlvHaMwp0VmtaxjbNaAAOAAsFEq9FxSG74wTx3oNkeCkxyWNwbFJ3aCA/wCHLNGd2zI4tH1HXb5LTJNWU+L2iqiGbowGTtHEx9V/ds9hQXWlqdrA5+1SFV9EaUjmYJYXhze8EEZtc04tcN4IuFZIJdoXQbEIQgEIQgEIQgEIQg8c6yWVU1yplU7BKpCgxJWtzl64qPSOMkoaOqMXHkNw7TYIG9LHstucz+wFoqZFLncotMy5LjkMu1B7TwbIuesfLkthKzcl9VKXHYb3lB7LUEmzfFesh3nErOKINChaT0rHC0ue4NA353PBoGLnYZBBOWHpAufaU1wmeSIh6NvrOAdJ22xa3s6XckNRUyvxke94Pruc5vcDgO5B1/aC9C4pTFrX36vMAjzC6RoFsjomvinLuT3GVjuI2idoHsdYcDkgnT6MEc3xmLol1hO0DCRu6TZHy2+YuM7WeUE2y6xyOB7VBoazbJY5pZK3rNJvgcnNd8phtge4gG4GmWtY2oZBez3xF7RY4iNwabHLAOaLcggtSFrgfdoPJbEAhCEAhCEAhC8dkUEKqOCXOTCryS4oNFW7om2/BTNC0+ywu3n2D/N/BQ6gZdqctZstDeAQRqp+4ZqQxlgBwUeAbT77h7Tl71KKCJXzbLeZwC1UsOyMczmtD3+kmtuapdVJstJ8O1Ar09pZsDCTcnIAdZzjkxvPAm+4Ak4Arn0rJ6qYXG084NA6rG8G3yGGJzNscgA7nJneZCbtF2xcLX6Un1iMD6rW8SrLofRzYWZdM9Y+5Alo9WI4m7TwJJLZnqt7G7+0qm6ZB9I7ave+9dYkZdc811o9iQO3OQVyJTtHVEkT9uJxY7fbJ3J7cnDt7rZqDFnZNKSFBfNHV4q4g9gDKmI5XwDiMr74ngW7vWYLZaVYJPidU24LHgY4O2ZgGOaeBvskji1V/QRMVRE4dV59G/ntdQ9u2G/aPFXnQsY25mEAtDy4Ai/XDZCftvcgaaPvsC/NSUIQCEIQCEIQCxfksljJkghVeSWuTSoGCVvzQEbLuaPpBMqp2Cg0vXb2qTXOwQZUTejfif8AC8rZtljj4LfG2wA4AJPrBNYNb3oNWhjcuKha7VxjgfsmztmzSMw6QhjT3E37lu0PLYkcUj+EV5LWDjIwdwjkd7WhBG1bqw4G4AazZA4b7DuDVaIq4cVziGcxwNsetLJf6rIrfiPivG6XeN6DqPp2kHpWwOOGHNc+1jdI+FpveJji1r5D/VmNzcgeqL25YYkqEdKucW7Rvb35qbL0nNDyTDa12hri1uZDQcLk7910COkiLjgOkLXH7yyVhoKQjMJxofQpc6SofH6MPsI4zm1jd7uZw8+KZfEgNyBU6HBnKSH/APViuOhMZZjwLR/oYfeq1pN4jDL73bXczG/2izzVo1YiIhD3CzpCXHiAcgeYFh3IG6EIQCEIQCEIQCxkyKyQghvyS6oamEmB7faoVSgjxPsQeYUuvyS9zlM9JtM5jAoGBKrOn33k7AE+jmGy08bc8f3dV/TTf6ju72IIVJNZwKi67M2odsfJLHdwOy49zXE9yydgVv8ASB7DG4AggixyIIsQe0IKNfahcN7Hh31XgMcftNiH1ktkTSaB1PKWOG0LG18pYzgbkb7Gx4HHgVDrIw3Fpuw5E5jk7gfbuQaIn2TvVhx+Mxf3X8lXWHFWTVEf12ngg6m3JaZw1oLnEBoFyTkAFjUV0cTbyOA4DMm2ey0Yn3KoVtdPXyCGFpbECL/qkIzPBo87bQDdQMdXVWVoha99zATstPMm5Pa4XyXS2NsABkEu0DodlNEGNzzc7e47yf37goms+sLKZtgQZSLgHJo9d3L2oNmsGsDKYWwc+17XsGj1nHcFG0LrVFLTGoe4CxcCGggk3NmhpN7kWPffBci0lpGSqkLWkkE3c4/K+k7gOA7OQBU1jYGeiiPT+U7gePb7EHVdBa3tnqXwHZbZt2jEm98QXZE8rb+RVqXzdRVb4pGyMNntNwefPiDke1d71Z0yyqgZK3MjpDe1wzB/fPegbIQhAIQhBoqo7j9+KWSncc/aOITpQK2mw5cswgRTFeU9VsnHI5rKqaRnlxGXfw9iXTOQPaaWx2dxxbz4j981D01Fi1244JdDVkYbvMHiEzZVNlbsuOPv49qCraX0g2Lo2LnZ2uAAOZIKw0fV+lFwLZ9oLbXB49YW71t1i0XLI6MNLW7N79FxLuBBAI8bKRovRfoxjnY9uNrk2/tbhutzQaa2nZI3ZlGGYcMC08Qdx8jvukFToGUdS0rfokB1ubSfYT3K6GFY/E2oOZjRkgcbse36v+FZ9WNEtHTkfNtXwa0bPi4NBH2grS2C28+K2xQEkAAkoIzqRrwWNZsh1to3L5X2yDnm58S7uVp0JopkDAGtAO8DdyvvPE717ozRoj6TsX+TezmmKBBrXrKykZYWdM4dFpyaPXfwb7fEji+k9JyVMhG0XbRu5x+UeJ4NG4dnILf8NdHV01V6XbLqac7TXWxDxa8L3chi0YXGGOySqn/EpPQl0JAJ62ALhbO19/igsc1U2Fvo4+ues7hz7eA3e1XtJRoiuLwWuN3jeczzPNMwUG4FWvUDWL4rOGuP9GQgO4NdkHe49x3KogrK6D6bY4EAjIr1UT4MdZfTRfF5D/VjAsTm5mQPbuPdxV7QCEIQCELF7wMSQBzwQRqmga7Lony8FX67V59y5t7n1XYfYdhfsCsTq6P1vAErz4+zifAoKcdETDNrieIYfzWyDQM7t2zzdYeV7+Stvx9nE+BR/EGcT4FAtptAHZtJIXHdYAW7zifJapdDSN6tnj7LvA4eab/H2cT4FH8Qj4nwKBAaOQZsd9kn2LNlBIcmHvw9qefxCPifArz+IR8T4FBAg0MT1yAOAxPjkPNNKamawWaLcTvPaVHk0mwAmxPkO8lJ6zWIWBDxsnFuyb7Q4h28cxggsyFTotNbRwL/AB/ynFHWPOR2uTs+4oM9adARV1NJTTDovGDh1mPGLXt5g+OIyK+XKikloaqWmnFnMdsu4He17eLSCCORX1pTzhwwwIzBzC518NGpXxyn+NQNvVQNNwBd0sQuSzm5uLm/WG9BwfSEBieJGdUm45Hh2JzSVAe0OHfyPBK9GziRhifwwPLlzC00cxhkLHdU5+5wQWIFbqWF0jmsYC5zjYAb1HiaXFrWi5cQGgZkk2AHE3KsE4ZSxmPAzOwle034H0LDfC2Bc4cgMbEBqoJJqWdskZDnscbBhJD2jrHLqnK/HsXadXNaY6vb2GSWYI7u2ei4yN2rNI3jIjdfeuMaq6JnrKgRxHZwvJJboxsyvbK+5rRvG4Akd50PouKmhZDC3ZY0d7jvc473E4koJqEIQKNaNYYaKEzSnkxo6z3cGhcQ058IldM8ljhE3dsgOdbhtOFh9UDvXmv2nzW1cjgbxRl0cQ3bLTYuH9xF78NkblXBEg2S6crHG7qqoP8A80g8g5YHSVZn6eot/wB2X9S8MKvbdLdBzPjMDQQfkjOS+1mLCx7RigoTdLVZyqKgn/vS/qWR0lWf9ep+9l/UrJq49tLIZop42v2Hts9wcDdrTazRxJF/om17pxBrjXuqWwUpikc82abOcOkSSTd1gML5YC6Cgfxiq+cz/fS/qXrtLVYzqKgcLyy4/wCpdErtTINHQun9JLNVMbiyPYa1rZAWOdZ0byAGucQTbLcqjrPVyStbJtB8TyLO2S1wdE0jYe3aIa4Nkv0cHBwO6zQTHTVV85n++l/Utb9O1Xzmf76X9S0PaoVSbAngCgu+p9G+oBqap75YWO2Yo5Xue2WQAEveHEgsZcYZOceDSDdC4uJLiSTnx7ylWrsOxTwsGUcLPtOsXHvkkc5MGOQTYmjgO8Jto+YsILHFvIdXvbkk0TlPp3oLvo+pEoB6sjc7ZEcvo8tx8SxCqeiqvZcDwz7Dn++StYOP7/e5B86/DHqaaGpFZA21NM4kgZRTG5LeTXYuH1huCqk0XxmJpY0GVu0cANpwttOaTvts3b2u4r6n09oiKrp5aadu1HI2x4g5hzTucCAQeIXB9WPgo0iKoxTt9FTgm8wcxwexp6zAHEhxFrAjC+OVkFW1V00YyRfHYc2+F9l2ezfI4DFWeg0dPNOKZsbXyysGzjdsTL3LybGwF8TmTbMnGZrz8FNSytD9HQl1M8NJs9l4n5ObZ7gSDYG+PWPBdY1H1TZQQ2wfO8AzSAZkZMbfJg3eO9BO1Y1fiooBDHic5HkdKR+9x4chuCboQgFrqb7DtnrbJt22wWxCD45oKwta3hYexTRpPkm3wlatOoa6VmyRDKXSQOt0S1xuWA8WONrcNk71V0DM6U5K9aUqXtbd/QG1a8UspcHW6nRhNmW3WzXMkw0d6aWQMZI4G2Ze4WaMTlj3ILT/ABEf9Wo+8qP/AB011M0wyPSdL6U9F7HNa97nF208yNaXl7Wm5cCwYZFqqI0XW7JPpDhmPSu+lvvbNts945211Gr9Te7i1xOZL7kZgXJ7AO8c7B3Gv1yo6OWWCectlDy8ta3bDxI4ua1zgLMcGlrbOIsGtORXIdMOdDDIJI/ROlqA6OPhHG2UFzSMCwmZoa4YO2HWySeq0LONt7iDYOe47d3G2LjxO/HkeV1rpCbXJNgALm9gMgOXJBKdVclArJ7gjiCpsQa1geWh5c5zWhxcGgMDC4nZIJJ9IAMbCxve4UeviaWNka3ZuXNLQSRdoabt2iTYh4wJNrc7AOtaqP8AS0xIzMEbh9Us2h4X8FvBVH+DnWP0RETsSwktByex19th8T3Hkr9VMbYSRHaidkd7T6j+Dh55hB7G5TIZEsY9SI5EDiOXC3HDxw96vVDPtlx3Ye//AAua085LmhuJuLAYkuOAsF0nRVKY4mtPWzd/cc/DLuQTEIQgEIQgEIQg1ultuUd9bbcpixLBwCCsa1aPp66EwVEZLc2uabPjdkHxutgfEHIghcS098GlXC4mAioj3WIjlt9JrjsntB7gvpMxN9UeAWDqWM5sb4BB8iaR0bNT29PE+K97F4sDbOxyOYyUNs4BuHAHcQbHxX15WaCpZW7MtPFI299l8bXi/GzhmoX8laM+YUn/ANeL9KD5Q9O31h4/vifFe/GB6w8f3xX1YdStGfMKX7iL9K8OpWjfmFL9xF+lB8qfGB6w8f3wHgj0zfWHiF9VfyVo35hS/cR/kvP5L0b8xpfuI/yQfLkNc1oLTsPYTfZcTgfWBaQQbYZ4772C8qK0OsLsa1t9lrTgL5nEkkmwuSTkNwAX1J/JejfmNL9xH+SP5K0b8xpfuI/yQfJ7nAEOa8BwxBBFwVZdC66OjNnuLXWsXNxY8cHsxB7LEL6Pg1Q0e07TaKma4ZFsMYPiApP8Apfm8X2Ag4VHrdEcSYO3aLfLasO4BM9FVklVf0Gy5oIDi09EE7i658AuyDQFL83i+wFui0VA0WbEwDgBYeSCo6swxU3Tc10k3rYBrL5hg95x7LlWZmnGn5DvJTRQReoFmKRnqhBHj0m0/Jd5KQypB3FZCFo3BZho4IPA5ZIQgEIQg//Z', slug: 'steelseries-arctis-nova-pro-wireless' },

  ];

  return (
    <div className="headphone-page">
      <h2>Browse Headphones</h2>
      <div className="headphone-grid">
        {headphoneData.map((headphone) => (
          <Link to={`/product/${headphone.id}`} key={headphone.id} className="headphone-card">
            <img src={headphone.image} alt={headphone.name} />
            <h3>{headphone.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeadphonePage;
