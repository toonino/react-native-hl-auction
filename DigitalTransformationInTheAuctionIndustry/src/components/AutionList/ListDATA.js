var flatListData = [
  {
    key: '1',
    image: 'abc1',
    title: 'Chủ tích tập đoàn FPT vừa mở bán đấu giá Tòa FPT...',
    createDate: '17/06/2021',
    author: 'TuanDC',
    name: 'Rang Rover',
  },
  {
    key: '2',
    image: 'abc2',
    title: 'Chủ tích tập đoàn FPT vừa mở bán đấu giá Tòa FPT...',
    createDate: '18/06/2021',
    author: 'HuyenTT',
    name: 'Audi',
  },
  {
    key: '3',
    image: 'abc3',
    title: 'Chủ tích tập đoàn FPT vừa mở bán đấu giá Tòa FPT...',
    createDate: '19/06/2021',
    author: 'TuanDC',
    name: 'Maserati',
  },
  {
    key: '4',
    image: 'abc4',
    title: 'Chủ tích tập đoàn FPT vừa mở bán đấu giá Tòa FPT...',
    createDate: '20/06/2021',
    author: 'TuanDC',
    name: 'Roll Royce',
  },
  {
    key: '5',
    image: 'abc5',
    title: 'Chủ tích tập đoàn FPT vừa mở bán đấu giá Tòa FPT...',
    createDate: '21/06/2021',
    author: 'TuanDC',
    name: 'BMW',
  },
  {
    service_name: 'Property',
    success: true,
    data: {
      Data: {
        auction: {
          createTime: '2021-08-11T12:42:20.651+00:00',
          createUser: 'vinhpd123',
          updateTime: '2021-08-11T12:42:20.651+00:00',
          updateUser: 'vinhpd123',
          id: 16,
          status: 0,
          accountId: 46,
          name: 'Đấu giá Phong',
          description: 'Đấu giá Phong',
          image:
            'https://auctionimage.s3.ap-southeast-1.amazonaws.com/image/20210811194216511205160057_553496558979293_7029850357460195629_n.jpg',
          openTime: '2021-08-11T12:41:00.000+00:00',
          closeTime: '2021-08-14T12:42:00.000+00:00',
          auctionFee: 500000,
          isDeleted: false,
          reasonDisable: null,
        },
        auctionPropertyResponse: [
          {
            auctionProperty: {
              createTime: '2021-08-11T12:45:03.390+00:00',
              createUser: 'vinhpd123',
              updateTime: '2021-08-11T13:37:21.002+00:00',
              updateUser: 'anhtai02',
              id: 21,
              type: 0,
              propertyId: 25,
              auctionId: 16,
              status: 1,
              isDeleted: false,
              startPrice: 200000,
              currentPrice: 3000000,
              buyPrice: 20000000,
              stepPrice: 200000,
              stepTime: 5,
              depositFee: 2000000,
              registerFee: 200000,
              confirmTime: null,
              propertyCheckPlace: 'Quảng Bình',
              propertyCheckTime: '2021-08-13T12:43:00.000Z',
              openTime: '2021-08-11T12:43:00.000+00:00',
              closeTime: '2021-08-11T15:43:00.000+00:00',
              registerOpenTime: '2021-08-13T14:58:00.000+00:00',
              registerCloseTime: '2021-08-11T15:43:00.000+00:00',
              reasonDisable: null,
            },
            documentsList: null,
            image:
              'https://auctionimage.s3.ap-southeast-1.amazonaws.com/image/20210811203510982226192393_512517006483373_7201301330558833560_n.png',
            propertyName: 'Phong Cute 123',
          },
          {
            auctionProperty: {
              createTime: '2021-08-15T12:23:25.444+00:00',
              createUser: 'vinhpd123',
              updateTime: '2021-08-15T12:23:32.972+00:00',
              updateUser: 'vinhpd123',
              id: 22,
              type: 0,
              propertyId: 20,
              auctionId: 16,
              status: 0,
              isDeleted: false,
              startPrice: 1,
              currentPrice: null,
              buyPrice: 21,
              stepPrice: 1,
              stepTime: 1,
              depositFee: 12,
              registerFee: 12,
              confirmTime: null,
              propertyCheckPlace: '21',
              propertyCheckTime: '2021-08-20T12:22:00.000Z',
              openTime: '2021-08-29T12:30:00.000+00:00',
              closeTime: '2021-08-30T12:30:00.000+00:00',
              registerOpenTime: '2021-08-27T12:30:00.000+00:00',
              registerCloseTime: '2021-08-28T12:30:00.000+00:00',
              reasonDisable: null,
            },
            documentsList: null,
            image:
              'https://auctionimage.s3.ap-southeast-1.amazonaws.com/image/2021080613162654136640282_485232125250029_6892334362935689216_o.jpg',
            propertyName: 'asd5',
          },
        ],
      },
    },
  },
];
module.exports = flatListData;
