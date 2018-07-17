
import { Company } from "./Company.js";

interface ITopAuthor {
        GetTopAuthor()
    }
class Author implements ITopAuthor {
    public AuthorName: string = "";
    public CompanyObj: Company = new Company();
    
    GetTopAuthor() {
        //Implimentation here ...  
    }

}  






