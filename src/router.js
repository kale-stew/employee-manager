import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="auth" hideNavBar={true}>
                    <Scene key="login" component={LoginForm} title="Please Login" hideNavBar={false} />
                </Scene>

                <Scene key="main" hideNavBar={true}>
                    <Scene 
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees" 
                        hideNavBar={false} 
                        rightTitle="Add New"
                        onRight={ () => Actions.employeeCreate() }
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" hideNavBar={false}/>
                </Scene>
            </Scene>
        </Router>
    )
};

export default RouterComponent;