
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import GalaxyAnimation from '@/components/GalaxyAnimation';
import { Settings, Users, BarChart3, Bell, Shield } from 'lucide-react';

const ManagementPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3342] pb-16">
      {/* Background animation */}
      <div className="fixed inset-0 z-0">
        <GalaxyAnimation />
      </div>
      
      <Header />
      
      <div className="relative z-10 pt-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#33C3F0] to-[#ffffff] drop-shadow-[0_0_15px_rgba(30,174,219,0.6)]">
              Management Portal
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Access and manage your Galaxy ITT services and account settings
            </p>
          </div>
          
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8 backdrop-blur-md bg-black/30 p-1 rounded-xl border border-white/10">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-[#1EAEDB]/30 text-white data-[state=active]:text-white">
                <BarChart3 className="h-4 w-4 mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="users" className="data-[state=active]:bg-[#1EAEDB]/30 text-white data-[state=active]:text-white">
                <Users className="h-4 w-4 mr-2" />
                Users
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-[#1EAEDB]/30 text-white data-[state=active]:text-white">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-[#1EAEDB]/30 text-white data-[state=active]:text-white">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-black/30 backdrop-blur-md border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Active Services</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-4xl font-bold text-[#33C3F0]">3</p>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/30 backdrop-blur-md border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Support Tickets</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-4xl font-bold text-[#33C3F0]">1</p>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">View Tickets</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/30 backdrop-blur-md border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Next Invoice</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-4xl font-bold text-[#33C3F0]">$2,499</p>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">View Billing</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/30 backdrop-blur-md border border-white/10 md:col-span-3">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Service Status</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <div>
                          <p className="font-medium text-white">Cloud Infrastructure</p>
                          <p className="text-sm text-gray-400">Last updated: 15 minutes ago</p>
                        </div>
                        <span className="inline-flex items-center rounded-full bg-green-100/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
                          Operational
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <div>
                          <p className="font-medium text-white">Security Monitoring</p>
                          <p className="text-sm text-gray-400">Last updated: 30 minutes ago</p>
                        </div>
                        <span className="inline-flex items-center rounded-full bg-green-100/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
                          Operational
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <div>
                          <p className="font-medium text-white">Data Backup</p>
                          <p className="text-sm text-gray-400">Last updated: 1 hour ago</p>
                        </div>
                        <span className="inline-flex items-center rounded-full bg-yellow-100/20 px-2.5 py-0.5 text-xs font-medium text-yellow-400">
                          Maintenance
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="users">
              <Card className="bg-black/30 backdrop-blur-md border border-white/10">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white">User Management</h3>
                    <Button className="bg-[#1EAEDB] hover:bg-[#33C3F0]">Add User</Button>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-white">Please log in with admin credentials to access user management features.</p>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Login as Administrator
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card className="bg-black/30 backdrop-blur-md border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Security Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <div>
                        <h4 className="font-medium text-white">Two-Factor Authentication</h4>
                        <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        Enable
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <div>
                        <h4 className="font-medium text-white">Security Audit Log</h4>
                        <p className="text-sm text-gray-400">View recent account activity</p>
                      </div>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        View Log
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-white">Password Reset</h4>
                        <p className="text-sm text-gray-400">Change your account password</p>
                      </div>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        Reset
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card className="bg-black/30 backdrop-blur-md border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Account Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <div>
                        <h4 className="font-medium text-white">Notification Preferences</h4>
                        <p className="text-sm text-gray-400">Manage how you receive alerts and updates</p>
                      </div>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Bell className="h-4 w-4 mr-2" />
                        Manage
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <div>
                        <h4 className="font-medium text-white">Payment Methods</h4>
                        <p className="text-sm text-gray-400">Update your billing information</p>
                      </div>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        Edit
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-white">API Access</h4>
                        <p className="text-sm text-gray-400">Manage API keys and permissions</p>
                      </div>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        Configure
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;
