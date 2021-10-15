import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import Header from '../common/Header';
import Footer from '../common/Footer';
import { securityStyle } from './SecurityScreenStyle';

export default class SecurityScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <Header title="Chính sách bảo mật" />
                <ScrollView style={securityStyle.mainScreen}>
                    <Text style={securityStyle.contentStyle}>
                        {securityPolicyContent}
                    </Text>
                </ScrollView>
                <Footer />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const securityPolicyContent = `
Điều 1.             Mục đích và phạm vi thu thập
1.      Việc thu thập dữ liệu chủ yếu trên Website bao gồm: Tên, ngày sinh/ngày đăng ký thành lập đối với Khách hàng là tổ chức, email, số điện thoại di động, tên đăng nhập, mật khẩu đăng nhập, địa chỉ cư trú/địa chỉ trụ sở, thông tin giấy tờ tuỳ thân/thông tin đăng ký kinh doanh. Đây là các thông tin mà Ban quản trị Website yêu cầu Khách hàng cung cấp bắt buộc khi đăng ký tài khoản và để Ban quản trị Website liên hệ xác nhận khi khách hàng đăng ký tham gia đấu giá trên website nhằm đảm bảo quyền lợi cho các bên tham gia vào cuộc đấu giá trực tuyến.

2.     Trong quá trình tham gia đấu giá tại Website, Ban quản trị Website lưu trữ tất cả mức giá được trả trong cuộc đấu giá, người trả giá, thời gian trả giá và những thông tin cần thiết khác trong quá trình diễn ra cuộc đấu giá trực tuyến;

3.      Các thông tin về số tài khoản ngân hàng để nộp phí đăng ký tham gia đấu giá, nộp tiền đặt trước và sẽ không được lưu giữ.

4.      Thông tin tài khoản ngân hàng dùng để nhận lại tiền đặt trước sẽ không được lưu trữ nếu không có sự đồng ý của Khách hàng.

5.      Ban quản trị Website cũng sẽ sử dụng cả thông tin nhận diện cá nhân của Khách hàng và một số thông tin nhận diện phi cá nhân (như cookies, địa chỉ IP, loại trình duyệt, ngày tổng số, v.v.) để gia tăng khả năng đáp ứng của Website về phương diện các Trang và Dịch vụ, cũng như về phát triển những chức năng, tính năng và các dịch vụ mới theo những xu hướng và sở thích đang diễn tiến.

6.      Tổ chức đấu giá tài sản tiến hành thu thập, lưu trữ và bảo vệ thông tin Khách hàng, những người tham gia đấu giá theo quy định của Luật Đấu giá tài sản và các văn bản hướng dẫn thi hành.
 
Điều 2.             Trách nhiệm của Khách hàng trong việc bảo vệ thông tin

1.      Các Khách hàng sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của mình.

2.      Ngoài ra, Khách hàng có trách nhiệm thông báo kịp thời cho Website về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.

Điều 3.             Phạm vi sử dụng thông tin
Website sử dụng thông tin Khách hàng cung cấp để:

1.      Cung cấp các dịch vụ đến các Khách hàng;

2.      Gửi các thông báo về hoạt động trao đổi thông tin giữa Khách hàng và Website;

3.      Ngăn ngừa các hoạt động phá huỷ tài khoản người dùng của Khách hàng hoặc các hoạt động giả mạo Khách hàng;

4.      Liên lạc và giải quyết với Khách hàng trong những trường hợp đặc biệt;

5.      Không sử dụng thông tin của Khách hàng ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại Ban quản trị Website. - Trong trường hợp có yêu cầu của pháp luật, Ban quản trị Website có trách nhiệm hợp tác cung cấp thông tin Khách hàng khi có yêu cầu từ cơ quan tư pháp bao gồm: Viện kiểm sát, toà án, cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của khách hàng. Ngoài ra, không ai có quyền xâm phạm vào thông tin của Khách hàng.

Điều 4.             Thời gian lưu trữ thông tin
Dữ liệu của Khách hàng sẽ được lưu trữ cho đến khi có yêu cầu huỷ bỏ hoặc tự Khách hàng đăng nhập và thực hiện huỷ bỏ. Còn lại trong mọi trường hợp thông tin Khách hàng sẽ được bảo mật trên máy chủ của Ban quản trị Website. Địa chỉ của đơn vị thu thập và quản lý thông tin Công ty Công ty Đấu giá Hợp danh Lạc Việt.

Điều 5.              Những chủ thể có quyền tiếp cận thông tin
1.      Công ty Đấu giá Hợp danh Lạc Việt, các Đấu giá viên và các thư ký hỗ trợ và thực hiện cuộc đấu giá tài sản. Các Đấu giá viên được phân công phụ trách phiên đấu giá sẽ chỉ có thể thể tiếp cận thông tin cá nhân của những khách hàng tham gia phiên đấu giá đó.

2.      Các khách hàng không thể biết được thông tin cá nhân của những người cùng đăng ký tham gia đấu giá, cùng trả giá.

3.      Ban quản trị Website có quyền tiếp cận các thông tin cá nhân mà Khách hàng đã dăng ký khi lập tài khoản.

4.      Bên thứ ba tham gia vào quá trình tổ chức phiên đấu giá. Trường hợp này, Bên thứ ba có trách nhiệm ký văn bản cam kết tuân thủ chính sách bảo mật thông tin khách hàng trước khi thu thập thông tin cá nhân Khách hàng.

Trong trường hợp có yêu cầu của pháp luật: Công ty Đấu giá Hợp danh Lạc Việt có trách nhiệm hợp tác cung cấp thông tin cá nhân khách hàng khi có yêu cầu từ cơ quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật. Ngoài ra, không ai có quyền xâm phạm vào thông tin cá nhân của khách hàng.

Điều 6.             Địa chỉ của đơn vị thu thập và quản lý thông tin
Công ty Đấu giá Hợp danh Lạc Việt (trụ sở tại Số 49 phố Văn Cao, phường Liễu Giai, quận Ba Đình, thành phố Hà Nội) thu thập và lưu trữ thông tin tại các địa chỉ sau đây:
o   Máy chủ 1: Data Center - Tầng 1 toà nhà FPT, 17 Duy Tân, quận Cầu Giấy, thành phố Hà Nội.
o   Máy chủ 2: Tầng 1 Tòa nhà N1 – Số 14 ngõ 143 phố Nguyễn Ngọc Vũ, phường Trung Hòa, quận Cầu Giấy, thành phố Hà Nội.
Trường hợp khách hàng có nhu cầu hỏi về hoạt động thu thập, xử lý thông tin liên quan đến cá nhân mình, vui lòng liên hệ qua Email: support@lacvietauction.vn.

Điều 7.             Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình
Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc huỷ bỏ thông tin của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa thông tin hoặc yêu cầu Ban quản trị Website thực hiện việc này.
Khách hàng có quyền gửi khiếu nại về việc lộ thông tin cho bên thứ 3 đến Ban quản trị của Website. Khi tiếp nhận những phản hồi này, Ban quản trị Website sẽ xác nhận lại thông tin, và phải có trách nhiệm trả lời lý do đồng thời hướng dẫn Khách hàng khôi phục và bảo mật lại thông tin.
Email: support@lacvietauction.vn

Điều 8.             Cam kết bảo mật thông tin khách hàng

1.      Thông tin Khách hàng trên Website được Ban quản trị Website cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin tại Chương này.

2.      Việc thu thập và sử dụng thông tin của mỗi Khách hàng chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp pháp luật có quy định khác.

3.      Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin của Khách hàng khi không có sự cho phép đồng ý từ Khách hàng.

4.      Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu Khách hàng, Ban quản trị Website sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng kiểm tra xử lý kịp thời và thông báo cho Khách hàng được biết.

5.      Ban quản lý Ban quản trị Website yêu cầu các cá nhân, tổ chức khi đăng ký là Khách hàng, phải cung cấp đầy đủ thông tin có liên quan như: Họ và tên, địa chỉ liên lạc, email, số chứng minh nhân dân, điện thoại..., và chịu trách nhiệm về tính chính xác, đầy đủ của những thông tin trên.

6.      Ban quản trị Website không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của Khách hàng đó nếu xét thấy tất cả thông tin của Khách hàng đó cung cấp khi đăng ký ban đầu là không chính xác.
`
