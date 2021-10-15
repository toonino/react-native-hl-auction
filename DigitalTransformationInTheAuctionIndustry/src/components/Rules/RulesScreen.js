import React, { Component } from "react";
import {
    ScrollView,
    StyleSheet,
    View, 
    Text,
} from 'react-native';

import Header from "../common/Header";
import Footer from "../common/Footer";
import { rulesStyle } from "./RulesScreenStyle";

export default class RulesScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <Header title="Điều khoản" />
                <ScrollView style={rulesStyle.mainScreen}>
                    <Text style={rulesStyle.textMainScreen}>
                        {rulesContent}
                    </Text>
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});


const rulesContent = `QUYỀN VÀ TRÁCH NHIỆM CỦA ĐỐI TÁC

I. QUYỀN

1. “Đối tác” của Daugiafpt.vn bao gồm các Tổ chức đấu giá ký hợp đồng sử dụng hệ thống Daugiafpt.vn để tổ chức đấu giá trực tuyến và các đấu giá viên được Tổ chức đấu giá đó đăng ký mở tài khoản nhà đấu giá trên Daugiafpt.vn.

2. Khi đăng ký trở thành Đối tác của Daugiafpt.vn và được Daugiafpt.vn đồng ý, Tổ chức đấu giá tài sản sẽ được Daugiafpt.vn cho tổ chức các cuộc bán đấu giá tài sản thông qua việc cấp quyền cho đấu giá viên của tổ chức đó.

3. Tổ chức đấu giá tài sản sẽ cung cấp danh sách những đấu giá viên và những người hỗ trợ của họ cho Daugiafpt.vn.

Mỗi đấu giá viên đó được cấp một tài khoản Nhà đấu giá với tên đăng ký và mật khẩu riêng để được vào sử dụng trong việc quản lý những cuộc đấu giá, nội dung công việc đăng tải/ quản lý hồ sơ khách hàng tham gia đấu giá, theo dõi các cuộc đấu giá mà mình chịu trách nhiệm tại Daugiafpt.vn.

Mỗi thành viên hỗ trợ cho đấu giá viên được cấp một tài khoản Hỗ trợ với tên đăng ký và mật khẩu riêng để được vào sử dụng trong việc hỗ trợ quản lý những cuộc đấu giá, nội dung công việc đăng tải/quản lý hồ sơ khách hàng tham gia đấu giá, theo dõi các cuộc đấu giá mà mình chịu trách nhiệm tại Daugiafpt.vn.

4. Tổ chức đấu giá tài sản và các đấu giá viên được đăng ký sẽ được nhân viên của Website đấu giá trực tuyến Daugiafpt.vn hướng dẫn sử dụng được các công cụ, các tính năng phục vụ cho việc tạo hồ sơ, tạo phiên đấu giá, xét duyệt hồ sơ tham gia đấu giá, tạo thông báo, xác định người trúng đấu giá, lưu trữ thông tin trả giá, đăng tải kết quả đấu giá và sử dụng các dịch vụ tiện ích trên Website đấu giá trực tuyến Daugiafpt.vn

5. Tổ chức đấu giá tài sản có quyền đóng góp ý kiến cho Website đấu giá trực tuyến Daugiafpt.vn trong quá trình hoạt động. Các kiến nghị được gửi trực tiếp bằng thư, fax hoặc email đến cho Website đấu giá trực tuyến Daugiafpt.vn.

II. NGHĨA VỤ

1. Tại thời điểm đăng ký tài khoản, Tổ chức đấu giá tài sản phải cung cấp đầy đủ và chính xác các thông tin cho Daugiafpt.vn khi đăng ký sử dụng dịch vụ:

- Tên và địa chỉ trụ sở của Tổ chức đấu giá tài sản;

- Số giấy đăng ký hoạt động của Tổ chức đấu giá tài sản, ngày cấp lần đầu, nơi cấp;

- Mã số thuế của Tổ chức đấu giá tài sản;

- Số điện thoại và email của Tổ chức đấu giá tài sản;

- Thông tin thẻ thanh toán của Tổ chức đấu giá tài sản sử dụng để thanh toán phí dịch vụ cho Website đấu giá trực tuyến Daugiafpt.vn;

- Thông tin của những đấu giá viên thực hiện dịch vụ đấu giá tài sản trên Website đấu giá trực tuyến Daugiafpt.vn, bao gồm:

Loại giấy tờ chứng thực cá nhân, số giấy tờ chứng thực cá nhân, ngày cấp, nơi cấp;

Địa chỉ thường trú và địa chỉ hiện tại của đấu giá viên;

Số chứng chỉ hành nghề đấu giá, ngày cấp, nơi cấp;

Số thẻ đấu giá viên, ngày cấp, nơi cấp;

Số điện thoại hoặc một phương thức liên hệ trực tuyến khác.

- Tổ chức đấu giá tài sản có trách nhiệm cung cấp đầy đủ thông tin về tài sản đấu giá, thông tin cuộc đấu giá trên website đấu giá trực tuyến, bao gồm nhưng không giới hạn những thông tin sau:

a) Tên tài sản hoặc danh mục tài sản, số lượng, chất lượng của tài sản đấu giá; nơi có tài sản đấu giá; giấy tờ về quyền sở hữu, quyền sử dụng đối với tài sản đấu giá;

b) Thời gian, địa điểm xem tài sản đấu giá;

c) Thời gian đăng ký tham gia đấu giá;

d) Giá khởi điểm của tài sản đấu giá;

đ) Lệ phí đăng ký tham gia đấu giá, tiền đặt trước;

e) Thời gian, điều kiện, cách thức đăng ký tham gia đấu giá;

g) Thời gian tổ chức cuộc đấu giá;

h) Hình thức đấu giá, phương thức đấu giá;

i) Các trường hợp bị truất quyền tham gia đấu giá; các trường hợp không được nhận lại tiền đặt trước;

j) Hợp đồng dịch vụ đấu giá tài sản với Người có tài sản;

k) Thông tin về vận chuyển và giao nhận;

l) Thông tin về các phương thức thanh toán.

2. Tổ chức đấu giá tài sản và đấu giá viên đảm bảo tính chính xác, trung thực của thông tin về tài sản đấu giá trên Website đấu giá trực tuyến.

3. Tổ chức đấu giá tài sản có trách nhiệm thực hiện các quy định tại Mục 2 Chương II Nghị định số 52/2013/NĐ-CP khi ứng dụng chức năng đặt hàng trực tuyến trên Website Đấu giá trực tuyến Daugiafpt.vn.

4. Tổ chức đấu giá tài sản có trách nhiệm cung cấp thông tin về tình hình kinh doanh của mình khi có yêu cầu của cơ quan nhà nước có thẩm quyền để phục vụ hoạt động thống kê thương mại điện tử.

5. Tổ chức đấu giá tài sản có trách nhiệm tuân thủ quy định của pháp luật về thanh toán, quảng cáo, khuyến mại, bảo vệ quyền sở hữu trí tuệ, bảo vệ quyền lợi người tiêu dùng và các quy định của pháp luật có liên quan khác khi bán hàng hóa hoặc cung ứng dịch vụ trên Website Đấu giá trực tuyến Daugiafpt.vn.

6. Tổ chức đấu giá tài sản có trách nhiệm thực hiện đầy đủ nghĩa vụ thuế theo quy định của pháp luật.

7. Tổ chức đấu giá tài sản sẽ tự chịu trách nhiệm về bảo mật, lưu giữ và mọi hoạt động dưới tên đăng ký, mật khẩu và hộp thư điện tử được cấp cho những đấu giá viên của tổ chức mình. Tổ chức đấu giá tài sản, đấu giá viên có trách nhiệm thông báo kịp thời cho Website Đấu giá trực tuyến Daugiafpt.vn về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của mình để hai bên cùng hợp tác xử lý.

8. Tổ chức đấu giá tài sản và các đấu giá viên cam kết những thông tin cung cấp cho Website Đấu giá trực tuyến Daugiafpt.vn và những thông tin đăng tải lên Website Đấu giá trực tuyến Daugiafpt.vn là chính xác và hoàn chỉnh. Nếu có bất kỳ thay đổi nào liên quan đến những thông tin đã cung cấp, Tổ chức đấu giá tài sản và các đấu giá viên có trách nhiệm phải cập nhật những thông tin đó trên Website Đấu giá trực tuyến Daugiafpt.vn.

9. Tổ chức đấu giá tài sản và các đấu giá viên có trách nhiệm cung cấp thông tin về tình hình kinh doanh của mình khi có yêu cầu của cơ quan nhà nước có thẩm quyền để phục vụ hoạt động thống kê thương mại điện tử.

10. Tổ chức đấu giá tài sản và các đấu giá viên phải tuân thủ quy định của pháp luật về thanh toán, quảng cáo, khuyến mại, bảo vệ quyền sở hữu trí tuệ, bảo vệ quyền lợi người tiêu dùng và các quy định của pháp luật có liên quan khác khi bán hàng hóa hoặc cung ứng dịch vụ trên Website thương mại điện tử.

11. Tổ chức đấu giá tài sản và các đấu giá viên cam kết, đồng ý không sử dụng dịch vụ của Website Đấu giá trực tuyến Daugiafpt.vn vào những mục đích bất hợp pháp, không hợp lý, lừa đảo, đe dọa, thăm dò thông tin bất hợp pháp, phá hoại, tạo ra và phát tán virus gây hư hại hệ thống, cấu hình, truyền tải thông tin của Website Đấu giá trực tuyến Daugiafpt.vn hay sử dụng dịch vụ của mình vào mục đích đầu cơ, lũng đoạn thị trường tạo những đơn đặt hàng, chào hàng giả, kể cả phục vụ cho việc phán đoán nhu cầu thị trường. Trong trường hợp vi phạm thì Đối tác phải chịu trách nhiệm về các hành vi của mình trước pháp luật.

12. Tổ chức đấu giá tài sản và các đấu giá viên cam kết không được thay đổi, chỉnh sửa, sao chép, truyền bá, phân phối, cung cấp và tạo những công cụ tương tự của dịch vụ do Website Đấu giá trực tuyến Daugiafpt.vn cung cấp cho một bên thứ ba nếu không được sự đồng ý của Chủ sở hữu và Ban quản trị Website Đấu giá trực tuyến Daugiafpt.vn trong bản quy chế này.

13. Tổ chức đấu giá tài sản và các đấu giá viên có trách nhiệm cung cấp thông tin về những cuộc đấu giá do mình tổ chức trên Website đấu giá trực tuyến Daugiafpt.vn trong việc giải quyết tranh chấp phát sinh giữa người tham gia đấu giá và Tổ chức đấu giá tài sản.

14. Tổ chức đấu giá tài sản và các đấu giá viên có trách nhiệm bồi thường thiệt hại cho người tham gia đấu giá nếu người tham gia đấu giá chứng minh được lỗi đó thuộc về Tổ chức đấu giá tài sản hoặc đấu giá viên thuộc Tổ chức đấu giá tài sản gây ra thiệt hại. Tổ chức đấu giá tài sản cam kết, đồng ý không sử dụng dịch vụ của Website đấu giá trực tuyến Daugiafpt.vn vào những mục đích bất hợp pháp, không hợp lý, lừa đảo, đe doạ, thăm dò thông tin bất hợp pháp, phá hoại, tạo ra và phát tán virus gây hư hại tới hệ thống, cấu hình, truyền tải thông tin của Website đấu giá trực tuyến Daugiafpt.vn. Trong trường hợp vi phạm thì Tổ chức đấu giá tài sản và đấu giá viên phải chịu trách nhiệm về các hành vi của mình trước pháp luật.

15. Tổ chức đấu giá tài sản và các đấu giá viên không được hành động gây mất uy tín của Website đấu giá trực tuyến Daugiafpt.vn dưới mọi hình thức như gây mất đoàn kết giữa các Tổ chức đấu giá tài sản bằng cách sử dụng tên đăng ký thứ hai, thông qua một bên thứ ba hoặc tuyên truyền, phổ biến những thông tin không có lợi cho uy tín của Website đấu giá trực tuyến Daugiafpt.vn.`