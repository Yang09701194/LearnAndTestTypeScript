// 的確  已確認  用 　　npm -D  去裝   除了會把package裝到node_module底下  也會把package資訊寫到  package.json
// 這個就  C# 的using 
import * as enzyme from  'enzyme';
import * as Adapter from  'enzyme-adapter-react-16';

//類似  NH的configure  其實 一般  C# 的App.xaml.cs 還是  某個Properties檔  也有類似方法   所以可以在那邊改讀取的預設config檔名稱
enzyme.configure({adapter : new Adapter()});












