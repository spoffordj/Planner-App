import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from '../core/user.service';
import { FirebaseUserModel } from '../core/user.model';

@Injectable()
export class UserResolver implements Resolve<FirebaseUserModel> {
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : FirebaseUserModel{

        return new FirebaseUserModel();
    }
}